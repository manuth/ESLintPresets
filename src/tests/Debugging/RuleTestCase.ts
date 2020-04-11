import { CLIEngine } from "eslint";
import { ICodeSnippetCollection } from "./ICodeSnippet";
import { LintReportTestCase } from "./LintReportTestCase";
import { RuleSet } from "./RuleSet";
import { RuleSuite } from "./RuleSuite";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a test-case which verifies a rule.
 */
export class RuleTestCase extends LintReportTestCase
{
    /**
     * The test-suite of this case.
     */
    private testSuite: RuleSuite;

    /**
     * Initializes a new instance of the `TestCase` class.
     *
     * @param ruleSuite
     * The `RuleSuite` of this test-case.
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
    public constructor(ruleSuite: RuleSuite, description: string, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippets: readonly ICodeSnippetCollection[])
    {
        super(description, ruleSet, scriptKind, codeSnippets);
        this.testSuite = ruleSuite;
    }

    /**
     * Gets the test-suite of this case.
     */
    public get TestSuite(): RuleSuite
    {
        return this.testSuite;
    }

    /**
     * @inheritdoc
     *
     * @param report
     * The report to check.
     */
    protected VerifyReport(report: CLIEngine.LintReport): boolean
    {
        return !report.results.some(
            (result) =>
            {
                return result.messages.some((message) => message.ruleId === this.TestSuite.RuleName);
            });
    }
}
