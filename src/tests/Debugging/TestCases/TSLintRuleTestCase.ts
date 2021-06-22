import { ESLint } from "eslint";
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
     * Initializes a new instance of the {@link TSLintRuleTestCase `TSLintRuleTestCase`} class.
     *
     * @param ruleSuite
     * The {@link TSLintRuleSuite `TSLintRuleSuite`} of this test-case.
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
    public override get TestSuite(): TSLintRuleSuite
    {
        return this.tslintTestSuite;
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
    protected override async VerifyResults(results: ESLint.LintResult[]): Promise<boolean>
    {
        return super.VerifyResults(results) &&
            !results.some(
                (result) =>
                {
                    return result.messages.some(
                        (message) =>
                        {
                            return message.ruleId === this.TestSuite.RuleName &&
                                message.message.includes(`tslint:${this.TestSuite.TSLintRuleName}`);
                        });
                });
    }
}
