import { ICodeSnippetCollection } from "./ICodeSnippet";
import { ITestCase } from "./ITestCase";
import { LintSuite } from "./LintSuite";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a test-case.
 */
export class LintTestCase implements ITestCase
{
    /**
     * The test-suite of this case.
     */
    private testSuite: LintSuite;

    /**
     * The description of the test-case.
     */
    private description: string;

    /**
     * The rule-sets this case is applicable to.
     */
    private ruleSet: RuleSet;

    /**
     * The script-kinds this test-case is applicable to.
     */
    private scriptKind: ScriptKind;

    /**
     * A set of code-snippets for testing.
     */
    private codeSnippets: ICodeSnippetCollection[] = [];

    /**
     * Initializes a new instance of the `TestCase` class.
     *
     * @param testSuite
     * The suite of this test-case.
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
    public constructor(testSuite: LintSuite, description: string, ruleSet: RuleSet, scriptKind: ScriptKind, codeSnippets: readonly ICodeSnippetCollection[])
    {
        this.testSuite = testSuite;
        this.description = description;
        this.ruleSet = ruleSet;
        this.scriptKind = scriptKind;
        this.codeSnippets.push(...codeSnippets);
    }

    /**
     * Gets the test-suite of this case.
     */
    public get TestSuite(): LintSuite
    {
        return this.testSuite;
    }

    /**
     * Gets the description of the test-case.
     */
    public get Description(): string
    {
        return this.description;
    }

    /**
     * Gets the rule-set this test-case is applicable to.
     */
    public get RuleSet(): RuleSet
    {
        return this.ruleSet;
    }

    /**
     * Gets the script-kinds this test-case is applicable to.
     */
    public get ScriptKind(): ScriptKind
    {
        return this.scriptKind;
    }

    /**
     * Gets a set of code-snippets for testing.
     */
    public get CodeSnippets(): readonly ICodeSnippetCollection[]
    {
        return this.codeSnippets;
    }
}
