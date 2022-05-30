import { RuleSet } from "../RuleSet.mjs";
import { ITestCase } from "../TestCases/ITestCase.mjs";
import { TestContext } from "../TestContext.mjs";
import { LintTestCase } from "./LintTestCase.mjs";
import { Suite } from "./Suite.mjs";

/**
 * Represents a test for linting.
 *
 * @template TCaseData
 * The type of the test-case options.
 */
export abstract class LintSuite<TCaseData = ITestCase> extends Suite
{
    /**
     * The test-cases.
     */
    private readonly testCases: LintTestCase[] = [];

    /**
     * Initializes a new instance of the {@link LintSuite `LintSuite<TCaseData>`} class.
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
