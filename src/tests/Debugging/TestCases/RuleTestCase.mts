import { ESLint } from "eslint";
import { RuleSet } from "../RuleSet.mjs";
import { ScriptKind } from "../ScriptKind.mjs";
import { RuleSuite } from "../Suites/RuleSuite.mjs";
import { ICodeSnippetCollection } from "./ICodeSnippet.mjs";
import { LintReportTestCase } from "./LintReportTestCase.mjs";

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
     * Initializes a new instance of the {@link RuleTestCase `RuleTestCase`} class.
     *
     * @param ruleSuite
     * The {@link RuleSuite `RuleSuite`} of this test-case.
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
     * @param results
     * The results to check.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected async VerifyResults(results: ESLint.LintResult[]): Promise<boolean>
    {
        return !results.some(
            (result) =>
            {
                return result.messages.some((message) => message.ruleId === this.TestSuite.RuleName);
            });
    }
}
