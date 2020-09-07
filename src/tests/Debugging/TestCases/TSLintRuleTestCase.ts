import { CLIEngine } from "eslint";
import { RuleSet } from "../RuleSet";
import { ScriptKind } from "../ScriptKind";
import { TSLintRuleSuite } from "../Suites/TSLintRuleSuite";
import { ICodeSnippetCollection } from "./ICodeSnippet";
import { RuleTestCase } from "./RuleTestCase";

/**
 * Represents a test-case which verifies a `tslint`-rule.
 */
export class TSLintRuleTestCase extends RuleTestCase
{
    /**
     * The test-suite of this case.
     */
    private tslintTestSuite: TSLintRuleSuite;

    /**
     * Initializes a new instance of the `TestCase` class.
     *
     * @param ruleSuite
     * The `TSLintRuleSuite` of this test-case.
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
    public constructor(ruleSuite: TSLintRuleSuite, description: string, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippets: readonly ICodeSnippetCollection[])
    {
        super(ruleSuite, description, ruleSet, scriptKind, codeSnippets);
        this.tslintTestSuite = ruleSuite;
    }

    /**
     * Gets the test-suite of this case.
     */
    public get TestSuite(): TSLintRuleSuite
    {
        return this.tslintTestSuite;
    }

    /**
     * @inheritdoc
     *
     * @param report
     * The report to check.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected VerifyReport(report: CLIEngine.LintReport): boolean
    {
        return super.VerifyReport(report) &&
            !report.results.some(
                (result) =>
                {
                    return result.messages.some((message) => message.message.includes(this.TestSuite.TSLintRuleName));
                });
    }
}
