import { CLIEngine } from "eslint";
import { RuleSet } from "../RuleSet";
import { ScriptKind } from "../ScriptKind";
import { EngineRunner } from "../Suites/EngineRunner";
import { LintTestCase } from "../Suites/LintTestCase";
import { ICodeSnippetCollection } from "./ICodeSnippet";

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
     * @param engineRunner
     * A component which runs the cli-engine.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected Verify(engineRunner: EngineRunner): boolean
    {
        return this.VerifyReport(engineRunner());
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
