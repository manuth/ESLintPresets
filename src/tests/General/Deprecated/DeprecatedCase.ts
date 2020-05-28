import { CLIEngine } from "eslint";
import { RuleSet } from "../../Debugging/RuleSet";
import { ScriptKind } from "../../Debugging/ScriptKind";
import { LintReportTestCase } from "../../Debugging/TestCases/LintReportTestCase";

/**
 * Represents a test-case for deprecated rules.
 */
export class DeprecatedCase extends LintReportTestCase
{
    /**
     * Initializes a new instance of the `DeprecatedCase` class.
     */
    public constructor()
    {
        super(
            "Checking whether none of the rules are deprecated…",
            RuleSet.All,
            ScriptKind.All,
            [
                {
                    Valid: true,
                    Snippets: [
                        ""
                    ]
                }
            ]);
    }

    /**
     * @inheritdoc
     *
     * @param report
     * The report to check.
     *
     * @returns
     * A value indicating whether the result is correct.
     */
    protected VerifyReport(report: CLIEngine.LintReport): boolean
    {
        return report.usedDeprecatedRules.length === 0;
    }
}
