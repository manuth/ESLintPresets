import { CLIEngine } from "eslint";
import { ICodeSnippetCollection } from "./ICodeSnippet";
import { LintTestCase } from "./LintTestCase";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";
import { TestContext } from "./TestContext";

/**
 * Represents a test which checks lint-reports.
 */
export abstract class LintReportTestCase extends LintTestCase
{
    /**
     * Initializes a new instance of the `LintReportTestCase` class.
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
    public constructor(description: string, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippets: readonly ICodeSnippetCollection[])
    {
        super(description, ruleSet, scriptKind, codeSnippets);
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The test-context.
     *
     * @param engine
     * The `CLIEngine` to use.
     *
     * @param scriptKind
     * The kind of script to verify.
     *
     * @param codeSnippet
     * The code-snippet to test.
     */
    protected Verify(context: TestContext, engine: CLIEngine, scriptKind: ScriptKind, codeSnippet: string): boolean
    {
        return this.VerifyReport(
            engine.executeOnText(
                codeSnippet,
                context.GetFileName(scriptKind)));
    }

    /**
     * Verifies whether the the lint-report is correct.
     *
     * @param report
     * The report to check.
     *
     * @returns
     * A value indicating whether the result is correct.
     */
    protected abstract VerifyReport(report: CLIEngine.LintReport): boolean;
}
