/*
    eslint-disable
        jsdoc/require-jsdoc,
        lines-between-class-members */

/**
 * Indicates a `tslint`-rule.
 */
export abstract class TSLintRule
{
    public static NoVoidExpression = "no-void-expression";
    public static MatchDefaultExportName = "match-default-export-name";
    public static OrderedImports = "ordered-imports";
    public static ReturnUndefined = "return-undefined";

    /**
     * Initializes a new instance of the {@link TSLintRule `TSLintRule`} class.
     */
    private constructor()
    { }
}