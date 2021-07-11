/*
    eslint-disable
        jsdoc/require-jsdoc,
        lines-between-class-members */

/**
 * Indicates a `tslint`-rule.
 */
export abstract class TSLintRule
{
    public static readonly NoVoidExpression = "no-void-expression";
    public static readonly MatchDefaultExportName = "match-default-export-name";
    public static readonly OrderedImports = "ordered-imports";
    public static readonly ReturnUndefined = "return-undefined";

    /**
     * Initializes a new instance of the {@link TSLintRule `TSLintRule`} class.
     */
    private constructor()
    { }
}
