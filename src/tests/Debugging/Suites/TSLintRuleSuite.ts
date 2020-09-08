import { ITestCase } from "../TestCases/ITestCase";
import { TSLintRuleTestCase } from "../TestCases/TSLintRuleTestCase";
import { RuleSuite } from "./RuleSuite";

/**
 * Represents a test for a `tslint`-rule.
 */
export class TSLintRuleSuite extends RuleSuite
{
    /**
     * The name of the `tslint`-rule to test.
     */
    private tslintRuleName: string;

    /**
     * Initializes a new instance of the `TSLintRuleSuite` class.
     *
     * @param ruleName
     * The name of the `tslint`-rule to test.
     *
     * @param testCases
     * The test-cases of the test-suite.
     */
    public constructor(ruleName: string, testCases: ITestCase[])
    {
        super("@typescript-eslint/tslint/config", testCases);
        this.tslintRuleName = ruleName;
    }

    /**
     * Gets the name of the `tslint`-rule to test.
     */
    public get TSLintRuleName(): string
    {
        return this.tslintRuleName;
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return this.BaseRuleSuite.SuiteName;
    }

    /**
     * Gets the base rule-suite.
     */
    protected get BaseRuleSuite(): RuleSuite
    {
        return new RuleSuite(this.TSLintRuleName, []);
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
    protected CreateTestCase(testCase: ITestCase): TSLintRuleTestCase
    {
        return new TSLintRuleTestCase(
            this,
            testCase.Description,
            testCase.RuleSet,
            testCase.ScriptKind,
            testCase.CodeSnippets);
    }
}
