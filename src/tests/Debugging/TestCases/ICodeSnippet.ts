/**
 * Represents a code-snippet.
 */
export interface ICodeSnippetCollection
{
    /**
     * Gets a value indicating whether the code-snippets are valid.
     */
    readonly Valid: boolean;

    /**
     * Gets a set of code-snippets.
     */
    readonly Snippets: string[];
}
