import Assert = require("assert");
import { CLIEngine } from "eslint";
import { Context } from "mocha";
import { TestConstants } from "../TestConstants";
import { ICodeSnippetCollection } from "./ICodeSnippet";
import { IRegisterable } from "./IRegisterable";
import { ITestCase } from "./ITestCase";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";
import { TestContext } from "./TestContext";

/**
 * Represents a test-case.
 */
export abstract class LintTestCase implements ITestCase, IRegisterable
{
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
        let mocha: Context;

        suiteSetup(
            function()
            {
                mocha = this;
            });

        test(
            this.Description,
            async () =>
            {
                mocha.enableTimeouts(false);

                for (let set of TestConstants.RuleSets)
                {
                    if (
                        ((ruleSet & set) > 0) &&
                        ((this.RuleSet & set) > 0))
                    {
                        for (let scriptKind of TestConstants.ScriptKinds)
                        {
                            if ((this.ScriptKind & scriptKind) > 0)
                            {
                                for (let snippetCollection of this.CodeSnippets)
                                {
                                    for (let codeSnippet of snippetCollection.Snippets)
                                    {
                                        Assert.strictEqual(
                                            this.Verify(() =>
                                            {
                                                return this.GetCLIEngine(context, set).executeOnText(
                                                    codeSnippet,
                                                    context.GetFileName(scriptKind));
                                            }),
                                            snippetCollection.Valid);
                                    }
                                }
                            }
                        }
                    }
                }
            });
    }

    /**
     * Gets the CLIEngine for the specified `ruleSet`.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to get the `CLIEngine` for.
     *
     * @returns
     * The `CLIEngine` for the specified `ruleSet`.
     */
    protected GetCLIEngine(context: TestContext, ruleSet: RuleSet): CLIEngine
    {
        return context.GetCLIEngine(ruleSet, true);
    }

    /**
     * Verifies whether the test-case is applicable.
     *
     * @param engineRunner
     * A component which runs the cli-engine.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected abstract Verify(engineRunner: () => CLIEngine.LintReport): boolean;
}
