import Assert = require("assert");
import dedent = require("dedent");
import { ESLint } from "eslint";
import { TestConstants } from "../../TestConstants";
import { IRegisterable } from "../IRegisterable";
import { RuleSet } from "../RuleSet";
import { ScriptKind } from "../ScriptKind";
import { ICodeSnippetCollection } from "../TestCases/ICodeSnippet";
import { ITestCase } from "../TestCases/ITestCase";
import { TestContext } from "../TestContext";
import { ESLintRunner } from "./ESLintRunner";

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
     * Initializes a new instance of the `TestCase` class.
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
                    this.timeout(10 * 1000);
                    this.slow(5 * 1000);

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
                                            try
                                            {
                                                Assert.strictEqual(
                                                    await self.Verify(() =>
                                                    {
                                                        return self.GetLinter(context, set).lintText(
                                                            dedent(`${codeSnippet}${LintTestCase.endOfFileMarker}`).replace(
                                                                new RegExp(`${LintTestCase.endOfFileMarker}$`), ""),
                                                            {
                                                                filePath: context.GetFileName(scriptKind)
                                                            });
                                                    }),
                                                    snippetCollection.Valid);
                                            }
                                            catch
                                            {
                                                let valid = snippetCollection.Valid;

                                                throw new Error(
                                                    dedent(
                                                        `
                                                            Unexpected Linting-result:
                                                            This code-snippet is expected to report ${valid ? "no errors" : "an error"} but reported ${valid ? "one" : "none"}:
                                                            ${codeSnippet}`));
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
     * Gets the linter for the specified `ruleSet`.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to get the linter for.
     *
     * @returns
     * The linter for the specified `ruleSet`.
     */
    protected GetLinter(context: TestContext, ruleSet: RuleSet): ESLint
    {
        return context.GetLinter(ruleSet, true);
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
    protected abstract async Verify(eslintRunner: ESLintRunner): Promise<boolean>;
}
