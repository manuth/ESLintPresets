import { ICodeSnippetCollection } from "./ICodeSnippet";
import { LintTestCase } from "./LintTestCase";
import { RuleSet } from "./RuleSet";
import { RuleSuite } from "./RuleSuite";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a test-case which verifies a rule.
 */
export class RuleTestCase extends LintTestCase
{
    /**
     * The `RuleSuite` of this case.
     */
    private ruleSuite: RuleSuite;

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
        super(ruleSuite, description, ruleSet, scriptKind, codeSnippets);
    }

    /**
     * @inheritdoc
     */
    public get TestSuite(): RuleSuite
    {
        return this.ruleSuite;
    }
}
