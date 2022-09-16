import { ESLint } from "eslint";
import { RuleSet } from "../../Debugging/RuleSet.js";
import { ScriptKind } from "../../Debugging/ScriptKind.js";
import { LintReportTestCase } from "../../Debugging/TestCases/LintReportTestCase.js";

/**
 * Represents a test-case for deprecated rules.
 */
export class DeprecatedCase extends LintReportTestCase
{
    /**
     * Initializes a new instance of the {@link DeprecatedCase `DeprecatedCase`} class.
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
     * @param results
     * The results to check.
     *
     * @returns
     * A value indicating whether the result is correct.
     */
    protected async VerifyResults(results: ESLint.LintResult[]): Promise<boolean>
    {
        return results.every(
            (result) =>
            {
                return result.usedDeprecatedRules.length === 0;
            });
    }
}
