import { ESLintPlugin } from "./ESLintPlugin";

/*
    eslint-disable
        jsdoc/require-jsdoc,
        lines-between-class-members */

/**
 * Indicates an `eslint`-rule.
 */
export abstract class ESLintRule
{
    public static readonly TypeScriptAdjacentOverloadSignatures = `${ESLintPlugin.TypeScriptESLint}/adjacent-overload-signatures` as const;
    public static readonly TypeScriptArrayType = `${ESLintPlugin.TypeScriptESLint}/array-type` as const;
    public static readonly TypeScriptAwaitThenable = `${ESLintPlugin.TypeScriptESLint}/await-thenable` as const;
    public static readonly TypeScriptBanTSComment = `${ESLintPlugin.TypeScriptESLint}/ban-ts-comment` as const;
    public static readonly TypeScriptBanTypes = `${ESLintPlugin.TypeScriptESLint}/ban-types` as const;
    public static readonly TypeScriptCamelCase = `${ESLintPlugin.TypeScriptESLint}/camelcase` as const;
    public static readonly TypeScriptClassNameCasing = `${ESLintPlugin.TypeScriptESLint}/class-name-casing` as const;
    public static readonly TypeScriptCommaSpacing = `${ESLintPlugin.TypeScriptESLint}/comma-spacing` as const;
    public static readonly TypeScriptConsistentTypeAssertions = `${ESLintPlugin.TypeScriptESLint}/consistent-type-assertions` as const;
    public static readonly TypeScriptConsistentTypeDefinitions = `${ESLintPlugin.TypeScriptESLint}/consistent-type-definitions` as const;
    public static readonly TypeScriptDefaultParamLast = `${ESLintPlugin.TypeScriptESLint}/default-param-last` as const;
    public static readonly TypeScriptExplicitFunctionReturnType = `${ESLintPlugin.TypeScriptESLint}/explicit-function-return-type` as const;
    public static readonly TypeScriptExplicitMemberAccessibility = `${ESLintPlugin.TypeScriptESLint}/explicit-member-accessibility` as const;
    public static readonly TypeScriptExplicitModuleBoundaryTypes = `${ESLintPlugin.TypeScriptESLint}/explicit-module-boundary-types` as const;
    public static readonly TypeScriptFuncCallSpacing = `${ESLintPlugin.TypeScriptESLint}/func-call-spacing` as const;
    public static readonly TypeScriptIndent = `${ESLintPlugin.TypeScriptESLint}/indent` as const;
    public static readonly TypeScriptInterfaceNamePrefix = `${ESLintPlugin.TypeScriptESLint}/interface-name-prefix` as const;
    public static readonly TypeScriptMemberDelimiterStyle = `${ESLintPlugin.TypeScriptESLint}/member-delimiter-style` as const;
    public static readonly TypeScriptMemberOrdering = `${ESLintPlugin.TypeScriptESLint}/member-ordering` as const;
    public static readonly TypeScriptNamingConvention = `${ESLintPlugin.TypeScriptESLint}/naming-convention` as const;
    public static readonly TypeScriptNoDynamicDelete = `${ESLintPlugin.TypeScriptESLint}/no-dynamic-delete` as const;
    public static readonly TypeScriptNoEmptyFunction = `${ESLintPlugin.TypeScriptESLint}/no-empty-function` as const;
    public static readonly TypeScriptNoEmptyInterface = `${ESLintPlugin.TypeScriptESLint}/no-empty-interface` as const;
    public static readonly TypeScriptNoExplicitAny = `${ESLintPlugin.TypeScriptESLint}/no-explicit-any` as const;
    public static readonly TypeScriptNoFloatingPromises = `${ESLintPlugin.TypeScriptESLint}/no-floating-promises` as const;
    public static readonly TypeScriptNoForInArray = `${ESLintPlugin.TypeScriptESLint}/no-for-in-array` as const;
    public static readonly TypeScriptNoInferrableTypes = `${ESLintPlugin.TypeScriptESLint}/no-inferrable-types` as const;
    public static readonly TypeScriptNoMisusedNew = `${ESLintPlugin.TypeScriptESLint}/no-misused-new` as const;
    public static readonly TypeScriptNoNamespace = `${ESLintPlugin.TypeScriptESLint}/no-namespace` as const;
    public static readonly TypeScriptNoParameterProperties = `${ESLintPlugin.TypeScriptESLint}/no-parameter-properties` as const;
    public static readonly TypeScriptNoThisAlias = `${ESLintPlugin.TypeScriptESLint}/no-this-alias` as const;
    public static readonly TypeScriptNoThrowLiteral = `${ESLintPlugin.TypeScriptESLint}/no-throw-literal` as const;
    public static readonly TypeScriptNoUnnecessaryBooleanLiteralCompare = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-boolean-literal-compare` as const;
    public static readonly TypeScriptNoUnnecessaryQualifier = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-qualifier` as const;
    public static readonly TypeScriptNoUnnecessaryTypeArguments = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-type-arguments` as const;
    public static readonly TypeScriptNoUnnecessaryTypeAssertion = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-type-assertion` as const;
    public static readonly TypeScriptNoUnusedExpressions = `${ESLintPlugin.TypeScriptESLint}/no-unused-expressions` as const;
    public static readonly TypeScriptNoUnusedVars = `${ESLintPlugin.TypeScriptESLint}/no-unused-vars` as const;
    public static readonly TypeScriptNoUseBeforeDefine = `${ESLintPlugin.TypeScriptESLint}/no-use-before-define` as const;
    public static readonly TypeScriptNoVarRequires = `${ESLintPlugin.TypeScriptESLint}/no-var-requires` as const;
    public static readonly TypeScriptPreferAsConst = `${ESLintPlugin.TypeScriptESLint}/prefer-as-const` as const;
    public static readonly TypeScriptPreferForOf = `${ESLintPlugin.TypeScriptESLint}/prefer-for-of` as const;
    public static readonly TypeScriptPreferFunctionType = `${ESLintPlugin.TypeScriptESLint}/prefer-function-type` as const;
    public static readonly TypeScriptPreferIncludes = `${ESLintPlugin.TypeScriptESLint}/prefer-includes` as const;
    public static readonly TypeScriptPreferNamespaceKeyword = `${ESLintPlugin.TypeScriptESLint}/prefer-namespace-keyword` as const;
    public static readonly TypeScriptPreferNullishCoalescing = `${ESLintPlugin.TypeScriptESLint}/prefer-nullish-coalescing` as const;
    public static readonly TypeScriptPreferOptionalChain = `${ESLintPlugin.TypeScriptESLint}/prefer-optional-chain` as const;
    public static readonly TypeScriptPreferStringStartsEndsWith = `${ESLintPlugin.TypeScriptESLint}/prefer-string-starts-ends-with` as const;
    public static readonly TypeScriptQuotes = `${ESLintPlugin.TypeScriptESLint}/quotes` as const;
    public static readonly TypeScriptRestrictPlusOperands = `${ESLintPlugin.TypeScriptESLint}/restrict-plus-operands` as const;
    public static readonly TypeScriptReturnAwait = `${ESLintPlugin.TypeScriptESLint}/return-await` as const;
    public static readonly TypeScriptUnboundMethod = `${ESLintPlugin.TypeScriptESLint}/unbound-method` as const;
    public static readonly TypeScriptSemi = `${ESLintPlugin.TypeScriptESLint}/semi` as const;
    public static readonly TypeScriptSpaceBeforeFunctionParen = `${ESLintPlugin.TypeScriptESLint}/space-before-function-paren` as const;
    public static readonly TypeScriptTripleSlashReference = `${ESLintPlugin.TypeScriptESLint}/triple-slash-reference` as const;
    public static readonly TypeScriptTypeAnnotationSpacing = `${ESLintPlugin.TypeScriptESLint}/type-annotation-spacing` as const;
    public static readonly TypeScriptUnifiedSignatures = `${ESLintPlugin.TypeScriptESLint}/unified-signatures` as const;
    public static readonly TSLint = `${ESLintPlugin.TSLint}/config` as const;
    public static readonly Deprecation = `${ESLintPlugin.Deprecation}/deprecation` as const;
    public static readonly ImportNoDefaultExport = `${ESLintPlugin.Import}/no-default-export` as const;
    public static readonly ImportNoDuplicates = `${ESLintPlugin.Import}/no-duplicates` as const;
    public static readonly ImportNoExtraneousDependencies = `${ESLintPlugin.Import}/no-extraneous-dependencies` as const;
    public static readonly ImportOrder = `${ESLintPlugin.Import}/order` as const;
    public static readonly JSDocCheckAlignment = `${ESLintPlugin.JSDoc}/check-alignment` as const;
    public static readonly JSDocCheckIndentation = `${ESLintPlugin.JSDoc}/check-indentation` as const;
    public static readonly JSDocCheckParamNames = `${ESLintPlugin.JSDoc}/check-param-names` as const;
    public static readonly JSDocCheckSyntax = `${ESLintPlugin.JSDoc}/check-syntax` as const;
    public static readonly JSDocCheckTagNames = `${ESLintPlugin.JSDoc}/check-tag-names` as const;
    public static readonly JSDocCheckValues = `${ESLintPlugin.JSDoc}/check-values` as const;
    public static readonly JSDocEmptyTags = `${ESLintPlugin.JSDoc}/empty-tags` as const;
    public static readonly JSDocNewlineAfterDescription = `${ESLintPlugin.JSDoc}/newline-after-description` as const;
    public static readonly JSDocNoTypes = `${ESLintPlugin.JSDoc}/no-types` as const;
    public static readonly JSDocRequireDescription = `${ESLintPlugin.JSDoc}/require-description` as const;
    public static readonly JSDocRequireJSDoc = `${ESLintPlugin.JSDoc}/require-jsdoc` as const;
    public static readonly JSDocRequireParamDescription = `${ESLintPlugin.JSDoc}/require-param-description` as const;
    public static readonly JSDocRequireParamName = `${ESLintPlugin.JSDoc}/require-param-name` as const;
    public static readonly JSDocRequireParam = `${ESLintPlugin.JSDoc}/require-param` as const;
    public static readonly JSDocRequireParamType = `${ESLintPlugin.JSDoc}/require-param-type` as const;
    public static readonly JSDocRequireReturns = `${ESLintPlugin.JSDoc}/require-returns` as const;
    public static readonly JSDocRequireReturnsType = `${ESLintPlugin.JSDoc}/require-returns-type` as const;
    public static readonly NodeNoUnpublishedImport = `${ESLintPlugin.Node}/no-unpublished-import` as const;
    public static readonly NodeNoUnpublishedRequire = `${ESLintPlugin.Node}/no-unpublished-require` as const;
    public static readonly ArrayBracketNewLine = "array-bracket-newline" as const;
    public static readonly ArrayBracketSpacing = "array-bracket-spacing" as const;
    public static readonly ArrayElementNewline = "array-element-newline" as const;
    public static readonly ArrowParens = "arrow-parens" as const;
    public static readonly ArrowSpacing = "arrow-spacing" as const;
    public static readonly BlockSpacing = "block-spacing" as const;
    public static readonly BraceStyle = "brace-style" as const;
    public static readonly CommaDangle = "comma-dangle" as const;
    public static readonly CommaStyle = "comma-style" as const;
    public static readonly Complexity = "complexity" as const;
    public static readonly ComputedPropertySpacing = "computed-property-spacing" as const;
    public static readonly Curly = "curly" as const;
    public static readonly DotNotation = "dot-notation" as const;
    public static readonly EOLLast = "eol-last" as const;
    public static readonly EQEQEQ = "eqeqeq" as const;
    public static readonly FunctionCallArgumentNewline = "function-call-argument-newline" as const;
    public static readonly GeneratorStarSpacing = "generator-star-spacing" as const;
    public static readonly GroupedAccessorPairs = "grouped-accessor-pairs" as const;
    public static readonly GuardForIn = "guard-for-in" as const;
    public static readonly LinesBetweenClassMembers = "lines-between-class-members" as const;
    public static readonly MaxClassesPerFile = "max-classes-per-file" as const;
    public static readonly MaxLen = "max-len" as const;
    public static readonly MultilineTernary = "multiline-ternary" as const;
    public static readonly NewParens = "new-parens" as const;
    public static readonly NoAsyncPromiseExecutor = "no-async-promise-executor" as const;
    public static readonly NoBitwise = "no-bitwise" as const;
    public static readonly NoCaller = "no-caller" as const;
    public static readonly NoCaseDeclarations = "no-case-declarations" as const;
    public static readonly NoCondAssign = "no-cond-assign" as const;
    public static readonly NoConsole = "no-console" as const;
    public static readonly NoConstantCondition = "no-constant-condition" as const;
    public static readonly NoConstructorReturn = "no-constructor-return" as const;
    public static readonly NoControlRegex = "no-control-regex" as const;
    public static readonly NoDebugger = "no-debugger" as const;
    public static readonly NoDuplicateCase = "no-duplicate-case" as const;
    public static readonly NoEmpty = "no-empty" as const;
    public static readonly NoEmptyPattern = "no-empty-pattern" as const;
    public static readonly NoEval = "no-eval" as const;
    public static readonly NoFallthrough = "no-fallthrough" as const;
    public static readonly NoFloatingDecimal = "no-floating-decimal" as const;
    public static readonly NoImplicitCoercion = "no-implicit-coercion" as const;
    public static readonly NoInnerDeclarations = "no-inner-declarations" as const;
    public static readonly NoInvalidThis = "no-invalid-this" as const;
    public static readonly NoLonelyIf = "no-lonely-if" as const;
    public static readonly NoMultipleEmptyLines = "no-multiple-empty-lines" as const;
    public static readonly NoMultiSpaces = "no-multi-spaces" as const;
    public static readonly NoNewWrappers = "no-new-wrappers" as const;
    public static readonly NoOctalEscape = "no-octal-escape" as const;
    public static readonly NoRegexSpaces = "no-regex-spaces" as const;
    public static readonly NoReturnAwait = "no-return-await" as const;
    public static readonly NoSequences = "no-sequences" as const;
    public static readonly NoShadow = "no-shadow" as const;
    public static readonly NoSparseArrays = "no-sparse-arrays" as const;
    public static readonly NoThrowLiteral = "no-throw-literal" as const;
    public static readonly NoTrailingSpaces = "no-trailing-spaces" as const;
    public static readonly NoUndefInit = "no-undef-init" as const;
    public static readonly NoUnreachable = "no-unreachable" as const;
    public static readonly NoUnsafeFinally = "no-unsafe-finally" as const;
    public static readonly NoUnusedLabels = "no-unused-labels" as const;
    public static readonly NoUselessCatch = "no-useless-catch" as const;
    public static readonly NoUselessRename = "no-useless-rename" as const;
    public static readonly NoVar = "no-var" as const;
    public static readonly NoVoid = "no-void" as const;
    public static readonly NoWhitespaceBeforeProperty = "no-whitespace-before-property" as const;
    public static readonly ObjectCurlyNewline = "object-curly-newline" as const;
    public static readonly ObjectCurlySpacing = "object-curly-spacing" as const;
    public static readonly ObjectPropertyNewline = "object-property-newline" as const;
    public static readonly ObjectShorthand = "object-shorthand" as const;
    public static readonly OneVar = "one-var" as const;
    public static readonly OperatorLineBreak = "operator-linebreak" as const;
    public static readonly PaddedBlocks = "padded-blocks" as const;
    public static readonly PaddingLineBetweenStatements = "padding-line-between-statements" as const;
    public static readonly PreferConst = "prefer-const" as const;
    public static readonly PreferObjectSpread = "prefer-object-spread" as const;
    public static readonly PreferRestParams = "prefer-rest-params" as const;
    public static readonly PreferSpread = "prefer-spread" as const;
    public static readonly QuoteProps = "quote-props" as const;
    public static readonly RestSpreadSpacing = "rest-spread-spacing" as const;
    public static readonly SemiSpacing = "semi-spacing" as const;
    public static readonly SemiStyle = "semi-style" as const;
    public static readonly SpaceBeforeBlocks = "space-before-blocks" as const;
    public static readonly SpaceInParens = "space-in-parens" as const;
    public static readonly SpaceInfixOPs = "space-infix-ops" as const;
    public static readonly SpaceUnaryOPs = "space-unary-ops" as const;
    public static readonly SpacedComment = "spaced-comment" as const;
    public static readonly SwitchColonSpacing = "switch-colon-spacing" as const;
    public static readonly TemplateCurlySpacing = "template-curly-spacing" as const;
    public static readonly UseIsNaN = "use-isnan" as const;
    public static readonly ValidTypeof = "valid-typeof" as const;
    public static readonly YieldStarSpacing = "yield-star-spacing" as const;
    public static readonly Yoda = "yoda" as const;

    /**
     * Initializes a new instance of the {@link ESLintRule `ESLintRule`} class.
     */
    private constructor()
    { }
}
