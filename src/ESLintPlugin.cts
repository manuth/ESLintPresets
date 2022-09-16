/**
 * Represents an `eslint`-plugin.
 */
export enum ESLintPlugin
{
    /**
     * Indicates the `@typescript-eslint` plugin.
     */
    TypeScriptESLint = "@typescript-eslint",

    /**
     * Indicates the `@typescript-eslint/tslint` plugin.
     */
    TSLint = "@typescript-eslint/tslint",

    /**
     * Indicates the `@delagen/deprecation` plugin.
     */
    Deprecation = "@delagen/deprecation",

    /**
     * Indicates the `eslint-comments` plugin.
     */
    ESLintComments = "eslint-comments",

    /**
     * Indicates the `import` plugin.
     */
    Import = "import",

    /**
     * Indicates the `jsdoc` plugin.
     */
    JSDoc = "jsdoc",

    /**
     * Indicates the `node` plugin.
     */
    Node = "node"
}
