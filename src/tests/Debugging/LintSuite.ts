import { ITestCase } from "./ITestCase";
import { LintTestCase } from "./LintTestCase";
import { RuleSet } from "./RuleSet";
import { Suite } from "./Suite";
import { SuiteContainer } from "./SuiteContainer";
import { TestContext } from "./TestContext";

/**
 * Represents a test for linting.
 */
export abstract class LintSuite<TCaseData = ITestCase> extends Suite
{
    /**
     * @inheritdoc
     */
    public Parent: SuiteContainer;

    /**
     * The test-cases.
     */
    private readonly testCases: LintTestCase[] = [];

    /**
     * Initializes a new instance of the `LintTestBase` class.
     *
     * @param testCases
     * The test-cases of the test-suite.
     */
    public constructor(testCases: TCaseData[])
    {
        super();

        for (let testCase of testCases)
        {
            this.testCases.push(this.CreateTestCase(testCase));
        }
    }

    /**
     * Gets the test-cases.
     */
    public get TestCases(): LintTestCase[]
    {
        return this.testCases;
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
    protected RegisterInternal(context: TestContext, ruleSet: RuleSet): void
    {
        for (let testCase of this.TestCases)
        {
            testCase.Register(context, ruleSet);
        }
    }

    /**
     * Creates a new test-case.
     *
     * @param testCase
     * The properties of the test-case to create.
     *
     * @returns
     * The newly created test-case.
     */
    protected abstract CreateTestCase(testCase: TCaseData): LintTestCase;
}
