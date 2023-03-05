import { strictEqual } from "node:assert";
import { EOL } from "node:os";
import dedent from "dedent";
import { ESLint } from "eslint";
import { TestConstants } from "../../TestConstants.js";
import { IRegisterable } from "../IRegisterable.js";
import { RuleSet } from "../RuleSet.js";
import { ScriptKind } from "../ScriptKind.js";
import { ICodeSnippetCollection } from "../TestCases/ICodeSnippet.js";
import { ITestCase } from "../TestCases/ITestCase.js";
import { TestContext } from "../TestContext.js";
import { ESLintRunner } from "./ESLintRunner.js";

/**
 * Represents a test-case.
 */
export abstract class LintTestCase implements ITestCase, IRegisterable
{
    /**
     * A marker for indicating the end of a file.
     */
    private static readonly endOfFileMarker = "EOF";

    /**
     * The description of the test-case.
     */
    private description: string;

    /**
     * The rule-sets this case is applicable to.
     */
    private ruleSet: RuleSet;

    /**
     * The script-kinds this test-case is applicable to.
     */
    private scriptKind: ScriptKind;

    /**
     * A set of code-snippets for testing.
     */
    private codeSnippets: ICodeSnippetCollection[] = [];

    /**
     * Initializes a new instance of the {@link LintTestCase `LintTestCase`} class.
     *
     * @param description
     * The description of the test-case.
     *
     * @param ruleSet
     * The rule-sets this case is applicable to.
     *
     * @param scriptKind
     * The script-kinds this test-case is applicable to.
     *
     * @param codeSnippets
     * A set of code-snippets for testing.
     */
    public constructor(description: string, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippets: readonly ICodeSnippetCollection[])
    {
        this.description = description;
        this.ruleSet = ruleSet;
        this.scriptKind = scriptKind;
        this.codeSnippets.push(...codeSnippets);
    }

    /**
     * Gets the description of the test-case.
     */
    public get Description(): string
    {
        return this.description;
    }

    /**
     * Gets the rule-set this test-case is applicable to.
     */
    public get RuleSet(): RuleSet
    {
        return this.ruleSet;
    }

    /**
     * Gets the script-kinds this test-case is applicable to.
     */
    public get ScriptKind(): ScriptKind
    {
        return this.scriptKind;
    }

    /**
     * Gets a set of code-snippets for testing.
     */
    public get CodeSnippets(): readonly ICodeSnippetCollection[]
    {
        return this.codeSnippets;
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     */
    public Register(context: TestContext, ruleSet: RuleSet): void
    {
        if ((this.RuleSet & ruleSet) > 0)
        {
            let self = this;

            test(
                this.Description,
                async function()
                {
                    this.timeout(30 * 1000);
                    this.slow(15 * 1000);

                    for (let set of TestConstants.RuleSets)
                    {
                        if (
                            ((ruleSet & set) > 0) &&
                            ((self.RuleSet & set) > 0))
                        {
                            for (let scriptKind of TestConstants.ScriptKinds)
                            {
                                if ((self.ScriptKind & scriptKind) > 0)
                                {
                                    for (let snippetCollection of self.CodeSnippets)
                                    {
                                        for (let codeSnippet of snippetCollection.Snippets)
                                        {
                                            let error: Error | undefined;
                                            let results: ESLint.LintResult[] = [];

                                            try
                                            {
                                                strictEqual(
                                                    await self.Verify(
                                                        async () =>
                                                        {
                                                            try
                                                            {
                                                                results = await self.LintSnippet(context, set, scriptKind, codeSnippet);
                                                                return results;
                                                            }
                                                            catch (exception)
                                                            {
                                                                if (exception instanceof Error)
                                                                {
                                                                    error = exception;
                                                                }
                                                                else
                                                                {
                                                                    error = new Error(`${exception}`);
                                                                }

                                                                throw exception;
                                                            }
                                                        }),
                                                    snippetCollection.Valid);
                                            }
                                            catch
                                            {
                                                let snippetBlock = [
                                                    "```",
                                                    dedent(codeSnippet),
                                                    "```"
                                                ].join(EOL);

                                                let tagLine = `Error while linting ${TestConstants.ScriptKindNames[scriptKind]} file:`;

                                                if (error)
                                                {
                                                    throw new Error(
                                                        [
                                                            tagLine,
                                                            "The following code-snippet couldn't be linted:",
                                                            snippetBlock,
                                                            "",
                                                            "Following error occurred:",
                                                            "```",
                                                            error,
                                                            "```",
                                                            "",
                                                            "Stack trace:",
                                                            error.stack
                                                        ].join(EOL));
                                                }
                                                else
                                                {
                                                    let valid = snippetCollection.Valid;

                                                    let messages = results.flatMap(
                                                        (lintResult) => lintResult.messages).map(
                                                            (message) =>
                                                            {
                                                                return `${message.ruleId}: ${message.message}`;
                                                            }).join("\n");

                                                    let deprecatedRules = results.flatMap(
                                                        (lintResult) => lintResult.usedDeprecatedRules).map(
                                                            (deprecatedRuleUse) =>
                                                            {
                                                                return `\`${deprecatedRuleUse.ruleId}\` has been replaced by` +
                                                                    ((deprecatedRuleUse.replacedBy.length > 1) ?
                                                                        "the following rules" :
                                                                        "") +
                                                                    `: \`${deprecatedRuleUse.replacedBy.join("`, `")}\``;
                                                            }).join("\n");

                                                    throw new Error(
                                                        [
                                                            dedent(`
                                                                ${tagLine}
                                                                Unexpected Linting-result:
                                                                This code-snippet is expected to report ${valid ? "no errors" : "an error"} but reported ${valid ? "at least one" : "none"}:`),
                                                            snippetBlock,
                                                            "",
                                                            ...(
                                                                messages.length > 0 ?
                                                                    [
                                                                        "Following errors were reported:",
                                                                        messages
                                                                    ] :
                                                                    []),
                                                            ...(
                                                                deprecatedRules.length > 0 ?
                                                                    [
                                                                        "Following deprecated rules were used:",
                                                                        deprecatedRules
                                                                    ] :
                                                                    []
                                                            )
                                                        ].join(EOL));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
        }
    }

    /**
     * Lints the specified {@link `codeSnippet`}.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to test for.
     *
     * @param scriptKind
     * The script-kind to test.
     *
     * @param codeSnippet
     * The code-snippet to test.
     *
     * @returns
     * The `eslint`-result.
     */
    protected LintSnippet(context: TestContext, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippet: string): Promise<ESLint.LintResult[]>
    {
        return this.GetLinter(context, ruleSet).lintText(
            dedent(`${codeSnippet}${LintTestCase.endOfFileMarker}`).replace(
                new RegExp(`${LintTestCase.endOfFileMarker}$`), ""),
            {
                filePath: context.GetFileName(scriptKind)
            });
    }

    /**
     * Gets the linter for the specified {@link ruleSet `ruleSet`}.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to get the linter for.
     *
     * @returns
     * The linter for the specified {@link ruleSet `ruleSet`}.
     */
    protected GetLinter(context: TestContext, ruleSet: RuleSet): ESLint
    {
        return context.Workspace.GetLinter(ruleSet, true);
    }

    /**
     * Verifies whether the test-case is applicable.
     *
     * @param eslintRunner
     * A component which runs `eslint`.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected abstract Verify(eslintRunner: ESLintRunner): Promise<boolean>;
}
