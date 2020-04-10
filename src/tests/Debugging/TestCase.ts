import { ICodeSnippetCollection } from "./ICodeSnippet";
import { LintSuite } from "./LintSuite";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a test-case.
 */
export class TestCase
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
     * @param scriptKind
     * The script-kinds this test-case is applicable to.
     *
     * @param codeSnippets
     * A set of code-snippets for testing.
     */
    public constructor(testSuite: LintSuite, description: string, scriptKind: ScriptKind, codeSnippets: ICodeSnippetCollection[])
    {
        this.testSuite = testSuite;
        this.description = description;
        this.scriptKind = scriptKind;
        this.codeSnippets = codeSnippets;
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
