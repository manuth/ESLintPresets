import Assert = require("assert");
import dedent = require("dedent");
import { CLIEngine } from "eslint";
import merge = require("lodash.merge");
import { Context } from "mocha";
import { ISuite } from "./ISuite";
import { ITestCase } from "./ITestCase";
import { ScriptKind } from "./ScriptKind";
import { TestCase } from "./TestCase";
import { TestContext } from "./TestContext";

/**
 * Represents a test for linting.
 */
export abstract class LintSuite implements ISuite
{
    /**
     * @inheritdoc
     */
    public Parent: ISuite;

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
        for (let testCase of testCases)
        {
            this.testCases.push(
                new TestCase(
                    this,
                    testCase.Description,
                    testCase.ScriptKind,
                    testCase.CodeSnippets));
        }

        this.config = config ?? {};
    }

    /**
     * @inheritdoc
     */
    public abstract get SuiteName(): string;

    /**
     * @inheritdoc
     */
    public get Config(): any
    {
        return merge(
            {
                parser: RecommendedRules.parser,
                plugins: RecommendedRules.plugins
            },
            this.config);
    }

    /**
     * Gets the test-cases.
     */
    public get TestCases(): TestCase[]
    {
        return this.testCases;
    }

    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     */
    public Register(context: TestContext): void
    {
        suite(
            this.SuiteName,
            () =>
            {
                let engine: CLIEngine;
                let mocha: Context;

                suiteSetup(
                    function()
                    {
                        mocha = this;
                    });

                suiteSetup(
                    () =>
                    {
                        engine = new CLIEngine(
                            merge(
                                {
                                    parserOptions: {
                                        project: context.Workspace.TSConfigFileName
                                    }
                                },
                                this.Config));
                    });

                for (let testCase of this.TestCases)
                {
                    test(
                        testCase.Description,
                        async () =>
                        {
                            mocha.enableTimeouts(false);

                            for (let scriptKind of [ScriptKind.JS, ScriptKind.TS])
                            {
                                if ((testCase.ScriptKind & scriptKind) > 0)
                                {
                                    let fileName = context.Workspace.GetFileName(scriptKind);

                                    for (let snippetCollection of testCase.CodeSnippets)
                                    {
                                        for (let codeSnippet of snippetCollection.Snippets)
                                        {
                                            Assert.strictEqual(
                                                this.VerifyResult(
                                                    engine.executeOnText(
                                                        dedent(codeSnippet),
                                                        fileName)),
                                                snippetCollection.Valid);
                                        }
                                    }
                                }
                            }
                        });
                }
            });
    }

    /**
     * Verifies whether the the lint-report is correct.
     *
     * @param report
     * The report to check.
     */
    protected abstract VerifyResult(report: CLIEngine.LintReport): boolean;
}
