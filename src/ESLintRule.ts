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
    public static TypeScriptAdjacentOverloadSignatures = `${ESLintPlugin.TypeScriptESLint}/adjacent-overload-signatures`;
    public static TypeScriptArrayType = `${ESLintPlugin.TypeScriptESLint}/array-type`;
    public static TypeScriptAwaitThenable = `${ESLintPlugin.TypeScriptESLint}/await-thenable`;
    public static TypeScriptBanTSComment = `${ESLintPlugin.TypeScriptESLint}/ban-ts-comment`;
    public static TypeScriptBanTypes = `${ESLintPlugin.TypeScriptESLint}/ban-types`;
    public static TypeScriptCamelCase = `${ESLintPlugin.TypeScriptESLint}/camelcase`;
    public static TypeScriptClassNameCasing = `${ESLintPlugin.TypeScriptESLint}/class-name-casing`;
    public static TypeScriptCommaSpacing = `${ESLintPlugin.TypeScriptESLint}/comma-spacing`;
    public static TypeScriptConsistentTypeAssertions = `${ESLintPlugin.TypeScriptESLint}/consistent-type-assertions`;
    public static TypeScriptConsistentTypeDefinitions = `${ESLintPlugin.TypeScriptESLint}/consistent-type-definitions`;
    public static TypeScriptDefaultParamLast = `${ESLintPlugin.TypeScriptESLint}/default-param-last`;
    public static TypeScriptExplicitFunctionReturnType = `${ESLintPlugin.TypeScriptESLint}/explicit-function-return-type`;
    public static TypeScriptExplicitMemberAccessibility = `${ESLintPlugin.TypeScriptESLint}/explicit-member-accessibility`;
    public static TypeScriptExplicitModuleBoundaryTypes = `${ESLintPlugin.TypeScriptESLint}/explicit-module-boundary-types`;
    public static TypeScriptFuncCallSpacing = `${ESLintPlugin.TypeScriptESLint}/func-call-spacing`;
    public static TypeScriptIndent = `${ESLintPlugin.TypeScriptESLint}/indent`;
    public static TypeScriptInterfaceNamePrefix = `${ESLintPlugin.TypeScriptESLint}/interface-name-prefix`;
    public static TypeScriptMemberDelimiterStyle = `${ESLintPlugin.TypeScriptESLint}/member-delimiter-style`;
    public static TypeScriptMemberOrdering = `${ESLintPlugin.TypeScriptESLint}/member-ordering`;
    public static TypeScriptNamingConvention = `${ESLintPlugin.TypeScriptESLint}/naming-convention`;
    public static TypeScriptNoDynamicDelete = `${ESLintPlugin.TypeScriptESLint}/no-dynamic-delete`;
    public static TypeScriptNoEmptyFunction = `${ESLintPlugin.TypeScriptESLint}/no-empty-function`;
    public static TypeScriptNoEmptyInterface = `${ESLintPlugin.TypeScriptESLint}/no-empty-interface`;
    public static TypeScriptNoExplicitAny = `${ESLintPlugin.TypeScriptESLint}/no-explicit-any`;
    public static TypeScriptNoFloatingPromises = `${ESLintPlugin.TypeScriptESLint}/no-floating-promises`;
    public static TypeScriptNoForInArray = `${ESLintPlugin.TypeScriptESLint}/no-for-in-array`;
    public static TypeScriptNoInferrableTypes = `${ESLintPlugin.TypeScriptESLint}/no-inferrable-types`;
    public static TypeScriptNoMisusedNew = `${ESLintPlugin.TypeScriptESLint}/no-misused-new`;
    public static TypeScriptNoNamespace = `${ESLintPlugin.TypeScriptESLint}/no-namespace`;
    public static TypeScriptNoParameterProperties = `${ESLintPlugin.TypeScriptESLint}/no-parameter-properties`;
    public static TypeScriptNoThisAlias = `${ESLintPlugin.TypeScriptESLint}/no-this-alias`;
    public static TypeScriptNoThrowLiteral = `${ESLintPlugin.TypeScriptESLint}/no-throw-literal`;
    public static TypeScriptNoUnnecessaryBooleanLiteralCompare = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-boolean-literal-compare`;
    public static TypeScriptNoUnnecessaryQualifier = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-qualifier`;
    public static TypeScriptNoUnnecessaryTypeArguments = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-type-arguments`;
    public static TypeScriptNoUnnecessaryTypeAssertion = `${ESLintPlugin.TypeScriptESLint}/no-unnecessary-type-assertion`;
    public static TypeScriptNoUnusedExpressions = `${ESLintPlugin.TypeScriptESLint}/no-unused-expressions`;
    public static TypeScriptNoUnusedVars = `${ESLintPlugin.TypeScriptESLint}/no-unused-vars`;
    public static TypeScriptNoUseBeforeDefine = `${ESLintPlugin.TypeScriptESLint}/no-use-before-define`;
    public static TypeScriptNoVarRequires = `${ESLintPlugin.TypeScriptESLint}/no-var-requires`;
    public static TypeScriptPreferAsConst = `${ESLintPlugin.TypeScriptESLint}/prefer-as-const`;
    public static TypeScriptPreferForOf = `${ESLintPlugin.TypeScriptESLint}/prefer-for-of`;
    public static TypeScriptPreferFunctionType = `${ESLintPlugin.TypeScriptESLint}/prefer-function-type`;
    public static TypeScriptPreferIncludes = `${ESLintPlugin.TypeScriptESLint}/prefer-includes`;
    public static TypeScriptPreferNamespaceKeyword = `${ESLintPlugin.TypeScriptESLint}/prefer-namespace-keyword`;
    public static TypeScriptPreferNullishCoalescing = `${ESLintPlugin.TypeScriptESLint}/prefer-nullish-coalescing`;
    public static TypeScriptPreferOptionalChain = `${ESLintPlugin.TypeScriptESLint}/prefer-optional-chain`;
    public static TypeScriptPreferStringStartsEndsWith = `${ESLintPlugin.TypeScriptESLint}/prefer-string-starts-ends-with`;
    public static TypeScriptQuotes = `${ESLintPlugin.TypeScriptESLint}/quotes`;
    public static TypeScriptRestrictPlusOperands = `${ESLintPlugin.TypeScriptESLint}/restrict-plus-operands`;
    public static TypeScriptReturnAwait = `${ESLintPlugin.TypeScriptESLint}/return-await`;
    public static TypeScriptUnboundMethod = `${ESLintPlugin.TypeScriptESLint}/unbound-method`;
    public static TypeScriptSemi = `${ESLintPlugin.TypeScriptESLint}/semi`;
    public static TypeScriptSpaceBeforeFunctionParen = `${ESLintPlugin.TypeScriptESLint}/space-before-function-paren`;
    public static TypeScriptTripleSlashReference = `${ESLintPlugin.TypeScriptESLint}/triple-slash-reference`;
    public static TypeScriptTypeAnnotationSpacing = `${ESLintPlugin.TypeScriptESLint}/type-annotation-spacing`;
    public static TypeScriptUnifiedSignatures = `${ESLintPlugin.TypeScriptESLint}/unified-signatures`;
    public static TSLint = `${ESLintPlugin.TSLint}/config`;
    public static Deprecation = `${ESLintPlugin.Deprecation}/deprecation`;
    public static ImportNoDefaultExport = `${ESLintPlugin.Import}/no-default-export`;
    public static ImportNoDuplicates = `${ESLintPlugin.Import}/no-duplicates`;
    public static ImportOrder = `${ESLintPlugin.Import}/order`;
    public static JSDocCheckAlignment = `${ESLintPlugin.JSDoc}/check-alignment`;
    public static JSDocCheckIndentation = `${ESLintPlugin.JSDoc}/check-indentation`;
    public static JSDocCheckParamNames = `${ESLintPlugin.JSDoc}/check-param-names`;
    public static JSDocCheckSyntax = `${ESLintPlugin.JSDoc}/check-syntax`;
    public static JSDocCheckTagNames = `${ESLintPlugin.JSDoc}/check-tag-names`;
    public static JSDocCheckValues = `${ESLintPlugin.JSDoc}/check-values`;
    public static JSDocEmptyTags = `${ESLintPlugin.JSDoc}/empty-tags`;
    public static JSDocNewlineAfterDescription = `${ESLintPlugin.JSDoc}/newline-after-description`;
    public static JSDocNoTypes = `${ESLintPlugin.JSDoc}/no-types`;
    public static JSDocRequireDescription = `${ESLintPlugin.JSDoc}/require-description`;
    public static JSDocRequireJSDoc = `${ESLintPlugin.JSDoc}/require-jsdoc`;
    public static JSDocRequireParamDescription = `${ESLintPlugin.JSDoc}/require-param-description`;
    public static JSDocRequireParamName = `${ESLintPlugin.JSDoc}/require-param-name`;
    public static JSDocRequireParam = `${ESLintPlugin.JSDoc}/require-param`;
    public static JSDocRequireParamType = `${ESLintPlugin.JSDoc}/require-param-type`;
    public static JSDocRequireReturns = `${ESLintPlugin.JSDoc}/require-returns`;
    public static JSDocRequireReturnsType = `${ESLintPlugin.JSDoc}/require-returns-type`;
    public static NodeNoUnpublishedImport = `${ESLintPlugin.Node}/no-unpublished-import`;
    public static NodeNoUnpublishedRequire = `${ESLintPlugin.Node}/no-unpublished-require`;
    public static ArrayBracketNewLine = "array-bracket-newline";
    public static ArrayBracketSpacing = "array-bracket-spacing";
    public static ArrayElementNewline = "array-element-newline";
    public static ArrowParens = "arrow-parens";
    public static ArrowSpacing = "arrow-spacing";
    public static BlockSpacing = "block-spacing";
    public static BraceStyle = "brace-style";
    public static CommaDangle = "comma-dangle";
    public static CommaStyle = "comma-style";
    public static Complexity = "complexity";
    public static ComputedPropertySpacing = "computed-property-spacing";
    public static ConstructorSuper = "constructor-super";
    public static Curly = "curly";
    public static DotNotation = "dot-notation";
    public static EOLLast = "eol-last";
    public static EQEQEQ = "eqeqeq";
    public static FunctionCallArgumentNewline = "function-call-argument-newline";
    public static GeneratorStarSpacing = "generator-star-spacing";
    public static GroupedAccessorPairs = "grouped-accessor-pairs";
    public static GuardForIn = "guard-for-in";
    public static LinesBetweenClassMembers = "lines-between-class-members";
    public static MaxClassesPerFile = "max-classes-per-file";
    public static MaxLen = "max-len";
    public static MultilineTernary = "multiline-ternary";
    public static NewParens = "new-parens";
    public static NoAsyncPromiseExecutor = "no-async-promise-executor";
    public static NoBitwise = "no-bitwise";
    public static NoCaller = "no-caller";
    public static NoCaseDeclarations = "no-case-declarations";
    public static NoCondAssign = "no-cond-assign";
    public static NoConsole = "no-console";
    public static NoConstantCondition = "no-constant-condition";
    public static NoConstructorReturn = "no-constructor-return";
    public static NoControlRegex = "no-control-regex";
    public static NoDebugger = "no-debugger";
    public static NoDuplicateCase = "no-duplicate-case";
    public static NoEmpty = "no-empty";
    public static NoEmptyPattern = "no-empty-pattern";
    public static NoEval = "no-eval";
    public static NoFallthrough = "no-fallthrough";
    public static NoFloatingDecimal = "no-floating-decimal";
    public static NoImplicitCoercion = "no-implicit-coercion";
    public static NoInnerDeclarations = "no-inner-declarations";
    public static NoInvalidThis = "no-invalid-this";
    public static NoLonelyIf = "no-lonely-if";
    public static NoMultipleEmptyLines = "no-multiple-empty-lines";
    public static NoMultiSpaces = "no-multi-spaces";
    public static NoNewWrappers = "no-new-wrappers";
    public static NoOctalEscape = "no-octal-escape";
    public static NoRegexSpaces = "no-regex-spaces";
    public static NoReturnAwait = "no-return-await";
    public static NoSequences = "no-sequences";
    public static NoShadow = "no-shadow";
    public static NoSparseArrays = "no-sparse-arrays";
    public static NoThrowLiteral = "no-throw-literal";
    public static NoTrailingSpaces = "no-trailing-spaces";
    public static NoUndefInit = "no-undef-init";
    public static NoUnreachable = "no-unreachable";
    public static NoUnsafeFinally = "no-unsafe-finally";
    public static NoUnusedLabels = "no-unused-labels";
    public static NoUselessCatch = "no-useless-catch";
    public static NoUselessRename = "no-useless-rename";
    public static NoVar = "no-var";
    public static NoVoid = "no-void";
    public static NoWhitespaceBeforeProperty = "no-whitespace-before-property";
    public static ObjectCurlyNewline = "object-curly-newline";
    public static ObjectCurlySpacing = "object-curly-spacing";
    public static ObjectPropertyNewline = "object-property-newline";
    public static ObjectShorthand = "object-shorthand";
    public static OneVar = "one-var";
    public static OperatorLineBreak = "operator-linebreak";
    public static PaddedBlocks = "padded-blocks";
    public static PaddingLineBetweenStatements = "padding-line-between-statements";
    public static PreferConst = "prefer-const";
    public static PreferObjectSpread = "prefer-object-spread";
    public static PreferRestParams = "prefer-rest-params";
    public static PreferSpread = "prefer-spread";
    public static QuoteProps = "quote-props";
    public static RestSpreadSpacing = "rest-spread-spacing";
    public static SemiSpacing = "semi-spacing";
    public static SemiStyle = "semi-style";
    public static SpaceBeforeBlocks = "space-before-blocks";
    public static SpaceInParens = "space-in-parens";
    public static SpaceInfixOPs = "space-infix-ops";
    public static SpaceUnaryOPs = "space-unary-ops";
    public static SpacedComment = "spaced-comment";
    public static SwitchColonSpacing = "switch-colon-spacing";
    public static TemplateCurlySpacing = "template-curly-spacing";
    public static UseIsNaN = "use-isnan";
    public static ValidTypeof = "valid-typeof";
    public static YieldStarSpacing = "yield-star-spacing";
    public static Yoda = "yoda";

    /**
     * Initializes a new instance of the {@link ESLintRule `ESLintRule`} class.
     */
    private constructor()
    { }
}