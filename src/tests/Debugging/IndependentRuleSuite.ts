import { Context } from "mocha";
import { RuleSuite } from "./Suites/RuleSuite";
import { ITestCase } from "./TestCases/ITestCase";
import { TestContext } from "./TestContext";

/**
 * Provides the functionality to run the rule-suite independently.
 */
export class IndependentRuleSuite extends RuleSuite
{
    /**
     * Initializes a new instance of the {@link IndependentRuleSuite `IndependentRuleSuite`} class.
     *
     * @param ruleName
     * The name of the rule to test.
     *
     * @param testCases
     * The test-cases of the test-suite.
     */
    public constructor(ruleName: string, testCases: ITestCase[])
    {
        super(ruleName, testCases);
    }

    /**
     * @inheritdoc
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public override async SuiteSetup(mocha: Context, testContext: TestContext): Promise<void>
    {
        super.SuiteSetup(mocha, testContext);
        await testContext.Workspace.Initialize();
    }

    /**
     * @inheritdoc
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public override async SuiteTeardown(mocha: Context, testContext: TestContext): Promise<void>
    {
        testContext.Workspace.Dispose();
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The parent test-context.
     *
     * @returns
     * The test-context of this suite.
     */
    protected override GetSuiteContext(context: TestContext): TestContext
    {
        return new TestContext();
    }
}
