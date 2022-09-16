import { ITestCase } from "../TestCases/ITestCase.js";
import { RuleTestCase } from "../TestCases/RuleTestCase.js";
import { LintSuite } from "./LintSuite.js";

/**
 * Represents a test for an `eslint`-rule.
 */
export class RuleSuite extends LintSuite
{
    /**
     * The name of the rule to test.
     */
    private ruleName: string;

    /**
     * Initializes a new instance of the {@link RuleSuite `RuleSuite`} class.
     *
     * @param ruleName
     * The name of the rule to test.
     *
     * @param testCases
     * The test-cases of the test-suite.
     */
    public constructor(ruleName: string, testCases: ITestCase[])
    {
        super(testCases);
        this.ruleName = ruleName;
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return `Testing the \`${this.RuleName}\`-rule…`;
    }

    /**
     * Gets the name of the rule to test.
     */
    public get RuleName(): string
    {
        return this.ruleName;
    }

    /**
     * @inheritdoc
     *
     * @param testCase
     * The properties of the test-case.
     *
     * @returns
     * The newly created test-case.
     */
    protected CreateTestCase(testCase: ITestCase): RuleTestCase
    {
        return new RuleTestCase(
            this,
            testCase.Description,
            testCase.RuleSet,
            testCase.ScriptKind,
            testCase.CodeSnippets);
    }
}
