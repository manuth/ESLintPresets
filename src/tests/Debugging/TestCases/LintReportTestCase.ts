import { ESLint } from "eslint";
import { RuleSet } from "../RuleSet";
import { ScriptKind } from "../ScriptKind";
import { ESLintRunner } from "../Suites/ESLintRunner";
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
     * A component which runs the linter.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected async Verify(engineRunner: ESLintRunner): Promise<boolean>
    {
        return this.VerifyResults(await engineRunner());
    }

    /**
     * Verifies whether the the lint-results are correct.
     *
     * @param results
     * The results to check.
     *
     * @returns
     * A value indicating whether the results are correct.
     */
    protected abstract VerifyResults(results: ESLint.LintResult[]): Promise<boolean>;
}
