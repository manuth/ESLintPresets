import { ICodeSnippetCollection } from "./ICodeSnippet";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a test-case.
 */
export interface ITestCase
{
    /**
     * The description of the test-case.
     */
    Description: string;

    /**
     * The rule-sets this test-case is applicable to.
     */
    RuleSet: RuleSet;

    /**
     * The script-kinds this test-case is applicable to.
     */
    ScriptKind: ScriptKind;

    /**
     * A set of code-snippets for testing.
     */
    CodeSnippets: readonly ICodeSnippetCollection[];
}
