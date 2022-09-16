import { Context } from "mocha";
import { RuleSet } from "../RuleSet.js";
import { TestContext } from "../TestContext.js";
import { ISuite } from "./ISuite.js";

/**
 * Represents a suite.
 */
export abstract class Suite implements ISuite
{
    /**
     * Initializes a new instance of the {@link Suite `Suite`} class.
     */
    public constructor()
    { }

    /**
     * @inheritdoc
     */
    public abstract get SuiteName(): string;

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
        let suiteContext = this.GetSuiteContext(context);
        let self = this;

        suite(
            this.SuiteName,
            () =>
            {
                suiteSetup(
                    async function()
                    {
                        return self.SuiteSetup(this, suiteContext);
                    });

                suiteTeardown(
                    async function()
                    {
                        return self.SuiteTeardown(this, suiteContext);
                    });

                setup(
                    async function()
                    {
                        return self.TestSetup(this, suiteContext);
                    });

                teardown(
                    async function()
                    {
                        return self.TestTeardown(this, suiteContext);
                    });

                this.RegisterInternal(suiteContext, ruleSet);
            });
    }

    /**
     * Prepares the suite.
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public async SuiteSetup(mocha: Context, testContext: TestContext): Promise<void>
    { }

    /**
     * Releases all resources used by the suite.
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public async SuiteTeardown(mocha: Context, testContext: TestContext): Promise<void>
    { }

    /**
     * Prepares each the current test.
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public async TestSetup(mocha: Context, testContext: TestContext): Promise<void>
    { }

    /**
     * Releases the resources of the current test.
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public async TestTeardown(mocha: Context, testContext: TestContext): Promise<void>
    { }

    /**
     * Gets the test-context for this suite.
     *
     * @param context
     * The global test-context.
     *
     * @returns
     * The test-context of this suite.
     */
    protected GetSuiteContext(context: TestContext): TestContext
    {
        return context;
    }

    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     */
    protected abstract RegisterInternal(context: TestContext, ruleSet: RuleSet): void;
}
