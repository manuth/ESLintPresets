import Assert = require("assert");
import dedent = require("dedent");
import { CLIEngine } from "eslint";
import { Context } from "mocha";
import { TestConstants } from "../TestConstants";
import { ITestCase } from "./ITestCase";
import { RuleSet } from "./RuleSet";
import { Suite } from "./Suite";
import { SuiteContainer } from "./SuiteContainer";
import { TestCase } from "./TestCase";
import { TestContext } from "./TestContext";

/**
 * Represents a test for linting.
 */
export abstract class LintSuite extends Suite
{
    /**
     * @inheritdoc
     */
    public Parent: SuiteContainer;

    /**
     * The test-cases.
     */
    private readonly testCases: TestCase[] = [];

    /**
     * The `eslint`-configuration to apply.
     */
    private config: any;

    /**
     * Initializes a new instance of the `LintTestBase` class.
     *
     * @param testCases
     * The test-cases of the test-suite.
     *
     * @param config
     * The `eslint`-configuration to apply.
     */
    public constructor(testCases: ITestCase[], config?: any)
    {
        super();

        for (let testCase of testCases)
        {
            this.testCases.push(
                new TestCase(
                    this,
                    testCase.Description,
                    testCase.RuleSet,
                    testCase.ScriptKind,
                    testCase.CodeSnippets));
        }

        this.config = config ?? {};
    }

    /**
     * Gets the `eslint`-configuration to use.
     */
    public get Config(): any
    {
        return this.config;
    }

    /**
     * Gets the test-cases.
     */
    public get TestCases(): TestCase[]
    {
        return this.testCases;
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The test-context.
     */
    protected RegisterInternal(context: TestContext, ruleSet: RuleSet): void
    {
        let mocha: Context;

        suiteSetup(
            function()
            {
                mocha = this;
            });

        for (let testCase of this.TestCases)
        {
            test(
                testCase.Description,
                async () =>
                {
                    mocha.enableTimeouts(false);

                    for (let scriptKind of TestConstants.ScriptKinds)
                    {
                        if (
                            (testCase.RuleSet & ruleSet) > 0 &&
                            (testCase.ScriptKind & scriptKind) > 0)
                        {
                            for (let snippetCollection of testCase.CodeSnippets)
                            {
                                for (let codeSnippet of snippetCollection.Snippets)
                                {
                                    Assert.strictEqual(
                                        this.VerifyResult(
                                            context.GetCLIEngine(ruleSet).executeOnText(
                                                dedent(codeSnippet),
                                                context.GetFileName(scriptKind))),
                                        snippetCollection.Valid);
                                }
                            }
                        }
                    }
                });
        }
    }

    /**
     * Verifies whether the the lint-report is correct.
     *
     * @param report
     * The report to check.
     */
    protected abstract VerifyResult(report: CLIEngine.LintReport): boolean;
}
