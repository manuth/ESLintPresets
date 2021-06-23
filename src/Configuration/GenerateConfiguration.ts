import type { Linter } from "eslint";
import merge = require("lodash.merge");
import { join } from "upath";
import { ESLintPlugin } from "../ESLintPlugin";
import { ESLintRule } from "../ESLintRule";

/**
 * Generates an `eslint`-configuration.
 *
 * @param weak
 * A value indicating whether a weak ruleset should be generated.
 *
 * @param typeChecking
 * A value indicating whether a ruleset for a workspace with type-checking should be generated.
 *
 * @returns
 * The configuration.
 */
export function GenerateConfiguration(weak: boolean, typeChecking: boolean): any
{
    let pathConverter: any = [
        {
            include: [
                "src/**/*.ts"
            ],
            replace: [
                "^src/(.+)\\.ts$",
                "lib/$1.js"
            ]
        },
        {
            include: [
                "src/**"
            ],
            replace: [
                "^src/(.+)$",
                "lib/$1"
            ]
        }
    ];

    let config: Linter.Config = {
        parser: "@typescript-eslint/parser",
        plugins: [
            ESLintPlugin.TypeScriptESLint,
            ESLintPlugin.Deprecation,
            ESLintPlugin.Import,
            ESLintPlugin.JSDoc,
            ESLintPlugin.Node
        ],
        extends: [
            "eslint:recommended",
            `plugin:${ESLintPlugin.TypeScriptESLint}/eslint-recommended`,
            `plugin:${ESLintPlugin.TypeScriptESLint}/recommended`
        ],
        rules: {
            [ESLintRule.TypeScriptAdjacentOverloadSignatures]: "warn",
            [ESLintRule.TypeScriptArrayType]: [
                weak ? "off" : "warn",
                {
                    default: "array-simple"
                }
            ],
            [ESLintRule.TypeScriptBanTSComment]: "off",
            [ESLintRule.TypeScriptBanTypes]: "error",
            [ESLintRule.TypeScriptCamelCase]: "off",
            [ESLintRule.TypeScriptClassNameCasing]: "off",
            [ESLintRule.TypeScriptCommaSpacing]: "warn",
            [ESLintRule.TypeScriptConsistentTypeAssertions]: "warn",
            [ESLintRule.TypeScriptConsistentTypeDefinitions]: [
                "warn",
                "interface"
            ],
            [ESLintRule.TypeScriptDefaultParamLast]: "error",
            [ESLintRule.TypeScriptExplicitFunctionReturnType]: "off",
            [ESLintRule.TypeScriptExplicitModuleBoundaryTypes]: "off",
            [ESLintRule.TypeScriptFuncCallSpacing]: "warn",
            // [ESLintRule.TypeScriptIndent]: [
            //     "warn",
            //     4,
            //     {
            //         "FunctionDeclaration": {
            //             "parameters": "first"
            //         },
            //         "FunctionExpression": {
            //             "parameters": "first"
            //         },
            //         "CallExpression": {
            //             "arguments": 1
            //         },
            //         "SwitchCase": 1
            //     }
            // ],
            [ESLintRule.TypeScriptInterfaceNamePrefix]: "off",
            [ESLintRule.TypeScriptMemberDelimiterStyle]: [
                "warn",
                {
                    singleline: {
                        delimiter: "comma",
                        requireLast: false
                    },
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    }
                }
            ],
            [ESLintRule.TypeScriptMemberOrdering]: [
                weak ? "off" : "warn",
                {
                    default: [
                        // Fields
                        "static-field",
                        "field",

                        "public-static-field",
                        "public-field",

                        "protected-static-field",
                        "protected-field",

                        "private-static-field",
                        "private-field",

                        // Constructors
                        "constructor",
                        "public-constructor",
                        "protected-constructor",
                        "private-constructor",

                        // Index signature
                        "signature",

                        // Methods
                        "static-method",
                        "method",

                        "public-static-method",
                        "public-method",

                        "protected-static-method",
                        "protected-method",

                        "private-static-method",
                        "private-method"
                    ]
                }
            ],
            [ESLintRule.TypeScriptNamingConvention]: [
                weak ? "off" : "warn",
                {
                    selector: "enumMember",
                    format: ["PascalCase"]
                },
                {
                    selector: "typeLike",
                    format: ["PascalCase"]
                },
                {
                    selector: "interface",
                    prefix: ["I"],
                    format: ["PascalCase"]
                },
                {
                    selector: "typeParameter",
                    prefix: ["T"],
                    format: ["PascalCase"]
                }
            ],
            [ESLintRule.TypeScriptNoDynamicDelete]: "off",
            [ESLintRule.TypeScriptNoEmptyFunction]: "off",
            [ESLintRule.TypeScriptNoEmptyInterface]: "off",
            [ESLintRule.TypeScriptNoExplicitAny]: "off",
            [ESLintRule.TypeScriptNoForInArray]: weak ? "off" : "error",
            [ESLintRule.TypeScriptNoInferrableTypes]: weak ? "off" : "error",
            [ESLintRule.TypeScriptNoMisusedNew]: "error",
            [ESLintRule.TypeScriptNoNamespace]: [
                "warn",
                {
                    allowDeclarations: true,
                    allowDefinitionFiles: true
                }
            ],
            [ESLintRule.TypeScriptNoParameterProperties]: "error",
            [ESLintRule.TypeScriptNoThisAlias]: "off",
            [ESLintRule.TypeScriptNoUnusedExpressions]: [
                "warn",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true
                }
            ],
            [ESLintRule.TypeScriptNoUnusedVars]: [
                "warn",
                {
                    args: "none"
                }
            ],
            [ESLintRule.TypeScriptNoUseBeforeDefine]: "off",
            [ESLintRule.TypeScriptNoVarRequires]: "off",
            [ESLintRule.TypeScriptPreferAsConst]: "warn",
            [ESLintRule.TypeScriptPreferForOf]: "warn",
            [ESLintRule.TypeScriptPreferFunctionType]: "warn",
            [ESLintRule.TypeScriptPreferNamespaceKeyword]: "error",
            [ESLintRule.TypeScriptPreferOptionalChain]: "warn",
            [ESLintRule.TypeScriptQuotes]: [
                "warn",
                "double",
                {
                    avoidEscape: true
                }
            ],
            [ESLintRule.TypeScriptSemi]: [
                "error",
                "always"
            ],
            [ESLintRule.TypeScriptSpaceBeforeFunctionParen]: [
                "warn",
                {
                    anonymous: "never",
                    asyncArrow: "always",
                    named: "never"
                }
            ],
            [ESLintRule.TypeScriptTripleSlashReference]: "off",
            [ESLintRule.TypeScriptTypeAnnotationSpacing]: "warn",
            [ESLintRule.TypeScriptUnifiedSignatures]: "off",
            [ESLintRule.ImportNoDefaultExport]: weak ? "off" : "warn",
            [ESLintRule.ImportNoDuplicates]: weak ? "off" : "warn",
            [ESLintRule.ImportNoExtraneousDependencies]: "error",
            [ESLintRule.ImportOrder]: [
                "warn",
                {
                    groups: [
                        "builtin",
                        [
                            "external",
                            "internal"
                        ],
                        [
                            "parent",
                            "sibling",
                            "index"
                        ]
                    ],
                    pathGroups: [
                        {
                            pattern: "child_process",
                            group: "builtin"
                        }
                    ],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true
                    }
                }
            ],
            [ESLintRule.JSDocCheckAlignment]: weak ? "off" : "warn",
            [ESLintRule.JSDocCheckIndentation]: weak ? "off" : "warn",
            [ESLintRule.JSDocCheckParamNames]: weak ? "off" : "warn",
            [ESLintRule.JSDocCheckSyntax]: weak ? "off" : "warn",
            [ESLintRule.JSDocCheckTagNames]: "warn",
            [ESLintRule.JSDocCheckValues]: "warn",
            [ESLintRule.JSDocEmptyTags]: "warn",
            [ESLintRule.JSDocNewlineAfterDescription]: weak ? "off" : "warn",
            [ESLintRule.JSDocRequireDescription]: [
                weak ? "off" : "warn",
                {
                    contexts: [
                        "ClassDeclaration",
                        "ClassExpression",
                        "ArrowFunctionExpression",
                        "FunctionDeclaration",
                        "FunctionExpression",
                        "MethodDefinition",
                        "TSEnumDeclaration",
                        "TSEnumMember",
                        "TSInterfaceDeclaration",
                        "ClassProperty",
                        "TSPropertySignature",
                        "TSAbstractMethodDefinition",
                        "TSCallSignatureDeclaration",
                        "TSConstructSignatureDeclaration",
                        "TSMethodSignature",
                        "TSTypeAliasDeclaration"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireJSDoc]: [
                weak ? "off" : "warn",
                {
                    require: {
                        ClassDeclaration: true,
                        ClassExpression: false,
                        ArrowFunctionExpression: false,
                        FunctionDeclaration: true,
                        FunctionExpression: false,
                        MethodDefinition: true
                    },
                    contexts: [
                        "TSEnumDeclaration",
                        "TSEnumMember",
                        "TSInterfaceDeclaration",
                        "ClassProperty",
                        "TSTypeAliasDeclaration",
                        "TSPropertySignature",
                        "TSAbstractMethodDefinition",
                        "TSCallSignatureDeclaration",
                        "TSConstructSignatureDeclaration",
                        "TSMethodSignature",
                        "TSDeclareFunction"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireParamDescription]: [
                weak ? "off" : "warn",
                {
                    contexts: [
                        "any"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireParam]: [
                weak ? "off" : "warn",
                {
                    exemptedBy: [],
                    checkSetters: false,
                    contexts: [
                        "ArrowFunctionExpression",
                        "FunctionDeclaration",
                        "FunctionExpression",
                        "TSEmptyBodyFunctionExpression",
                        "TSMethodSignature",
                        "TSConstructSignatureDeclaration",
                        "TSCallSignatureDeclaration",
                        "TSDeclareFunction",
                        "TSFunctionType"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireParamName]: [
                "warn",
                {
                    contexts: [
                        "any"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireParamType]: [
                weak ? "off" : "warn",
                {
                    contexts: [
                        "any"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireReturns]: [
                weak ? "off" : "warn",
                {
                    checkGetters: false,
                    exemptedBy: [],
                    contexts: [
                        "ArrowFunctionExpression:not([returnType.typeAnnotation.type='TSVoidKeyword']):not([returnType.typeAnnotation.typeName.name='Promise'][returnType.typeAnnotation.typeParameters.params.0.type='TSVoidKeyword'])",
                        "FunctionDeclaration:not([returnType.typeAnnotation.type='TSVoidKeyword']):not([returnType.typeAnnotation.typeName.name='Promise'][returnType.typeAnnotation.typeParameters.params.0.type='TSVoidKeyword'])",
                        "FunctionExpression:not([returnType.typeAnnotation.type='TSVoidKeyword']):not([returnType.typeAnnotation.typeName.name='Promise'][returnType.typeAnnotation.typeParameters.params.0.type='TSVoidKeyword'])"
                    ]
                }
            ],
            [ESLintRule.JSDocRequireReturnsType]: [
                weak ? "off" : "warn",
                {
                    contexts: [
                        "any"
                    ]
                }
            ],
            [ESLintRule.NodeNoUnpublishedImport]: [
                "error",
                {
                    convertPath: pathConverter
                }
            ],
            [ESLintRule.NodeNoUnpublishedRequire]: [
                "error",
                {
                    convertPath: pathConverter
                }
            ],
            [ESLintRule.ArrayBracketNewLine]: [
                "warn",
                "consistent"
            ],
            [ESLintRule.ArrayBracketSpacing]: "warn",
            [ESLintRule.ArrayElementNewline]: [
                "warn",
                "consistent"
            ],
            [ESLintRule.ArrowParens]: [
                "off",
                "as-needed"
            ],
            [ESLintRule.ArrowSpacing]: "warn",
            [ESLintRule.BlockSpacing]: "warn",
            [ESLintRule.BraceStyle]: [
                "warn",
                "allman",
                {
                    allowSingleLine: true
                }
            ],
            [ESLintRule.CommaDangle]: weak ? "off" : "error",
            [ESLintRule.CommaStyle]: "warn",
            [ESLintRule.Complexity]: "off",
            [ESLintRule.ComputedPropertySpacing]: "warn",
            [ESLintRule.ConstructorSuper]: "error",
            [ESLintRule.Curly]: "off",
            [ESLintRule.DotNotation]: "off",
            [ESLintRule.EOLLast]: "warn",
            [ESLintRule.EQEQEQ]: [
                "warn",
                "always"
            ],
            [ESLintRule.FunctionCallArgumentNewline]: [
                "warn",
                "consistent"
            ],
            [ESLintRule.GeneratorStarSpacing]: [
                "warn",
                {
                    before: false,
                    after: true,
                    anonymous: "neither",
                    method: {
                        before: true,
                        after: false
                    }
                }
            ],
            [ESLintRule.GroupedAccessorPairs]: "warn",
            [ESLintRule.GuardForIn]: "off",
            [ESLintRule.LinesBetweenClassMembers]: "warn",
            [ESLintRule.MaxClassesPerFile]: "off",
            [ESLintRule.MaxLen]: "off",
            [ESLintRule.MultilineTernary]: [
                "warn",
                "always-multiline"
            ],
            [ESLintRule.NewParens]: "warn",
            [ESLintRule.NoAsyncPromiseExecutor]: "off",
            [ESLintRule.NoBitwise]: "off",
            [ESLintRule.NoCaller]: "error",
            [ESLintRule.NoCaseDeclarations]: "off",
            [ESLintRule.NoCondAssign]: "error",
            [ESLintRule.NoConsole]: "off",
            [ESLintRule.NoConstantCondition]: "warn",
            [ESLintRule.NoConstructorReturn]: "error",
            [ESLintRule.NoControlRegex]: "off",
            [ESLintRule.NoDebugger]: "warn",
            [ESLintRule.NoDuplicateCase]: "error",
            [ESLintRule.NoEmpty]: "off",
            [ESLintRule.NoEmptyPattern]: "off",
            [ESLintRule.NoEval]: "warn",
            [ESLintRule.NoFallthrough]: "error",
            [ESLintRule.NoFloatingDecimal]: "error",
            [ESLintRule.NoImplicitCoercion]: "warn",
            [ESLintRule.NoInnerDeclarations]: "off",
            [ESLintRule.NoInvalidThis]: "off",
            [ESLintRule.NoLonelyIf]: "warn",
            [ESLintRule.NoMultipleEmptyLines]: [
                "warn",
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 0
                }
            ],
            [ESLintRule.NoMultiSpaces]: "warn",
            [ESLintRule.NoNewWrappers]: "error",
            [ESLintRule.NoOctalEscape]: "warn",
            [ESLintRule.NoRegexSpaces]: "off",
            [ESLintRule.NoReturnAwait]: "warn",
            [ESLintRule.NoSequences]: "error",
            [ESLintRule.NoShadow]: "off",
            [ESLintRule.NoSparseArrays]: "error",
            [ESLintRule.NoThrowLiteral]: "error",
            [ESLintRule.NoTrailingSpaces]: "warn",
            [ESLintRule.NoUndefInit]: "warn",
            [ESLintRule.NoUnreachable]: "off",
            [ESLintRule.NoUnsafeFinally]: "error",
            [ESLintRule.NoUnusedLabels]: "warn",
            [ESLintRule.NoUselessCatch]: "off",
            [ESLintRule.NoUselessRename]: "warn",
            [ESLintRule.NoVar]: "error",
            [ESLintRule.NoVoid]: "warn",
            [ESLintRule.NoWhitespaceBeforeProperty]: "warn",
            [ESLintRule.ObjectCurlyNewline]:
                [
                    "warn",
                    {
                        multiline: true,
                        consistent: true
                    }
                ],
            [ESLintRule.ObjectCurlySpacing]: [
                "warn",
                "always"
            ],
            [ESLintRule.ObjectPropertyNewline]: [
                "warn",
                {
                    allowAllPropertiesOnSameLine: true
                }
            ],
            [ESLintRule.ObjectShorthand]: "warn",
            "one-var": [
                "warn",
                "never"
            ],
            [ESLintRule.OperatorLineBreak]: [
                weak ? "off" : "warn",
                "after"
            ],
            [ESLintRule.PaddedBlocks]: [
                weak ? "off" : "warn",
                "never"
            ],
            [ESLintRule.PaddingLineBetweenStatements]: [
                weak ? "off" : "warn",
                {
                    blankLine: "always",
                    prev: "*",
                    next: "multiline-block-like"
                },
                {
                    blankLine: "always",
                    prev: "multiline-block-like",
                    next: "*"
                },
                {
                    blankLine: "any",
                    prev: "multiline-block-like",
                    next: [
                        "return",
                        "break",
                        "continue"
                    ]
                }
            ],
            [ESLintRule.PreferConst]: "off",
            [ESLintRule.PreferObjectSpread]: "warn",
            [ESLintRule.PreferRestParams]: "warn",
            [ESLintRule.PreferSpread]: "warn",
            [ESLintRule.QuoteProps]: [
                weak ? "off" : "warn",
                "as-needed"
            ],
            [ESLintRule.RestSpreadSpacing]: "warn",
            [ESLintRule.SemiSpacing]: "warn",
            [ESLintRule.SemiStyle]: "warn",
            [ESLintRule.SpaceBeforeBlocks]: "warn",
            [ESLintRule.SpaceInParens]: "warn",
            [ESLintRule.SpaceInfixOPs]: "warn",
            [ESLintRule.SpaceUnaryOPs]: "warn",
            [ESLintRule.SpacedComment]: weak ?
                "off" :
                [
                    "warn",
                    "always",
                    {
                        markers: [
                            "/"
                        ]
                    }
                ],
            [ESLintRule.SwitchColonSpacing]: "warn",
            [ESLintRule.TemplateCurlySpacing]: "warn",
            [ESLintRule.UseIsNaN]: "warn",
            [ESLintRule.YieldStarSpacing]: "warn",
            [ESLintRule.Yoda]: "warn"
        },
        overrides: [],
        settings: {
            jsdoc: {
                mode: "typescript"
            }
        }
    };

    config.overrides.push(
        {
            files: [
                "*.js",
                "*.jsx"
            ],
            rules: {
                [ESLintRule.ValidTypeof]: "error"
            }
        },
        {
            files: [
                "*.ts",
                "*.tsx"
            ],
            rules: {
                [ESLintRule.TypeScriptExplicitFunctionReturnType]: [
                    "warn",
                    {
                        allowExpressions: true
                    }
                ],
                [ESLintRule.TypeScriptExplicitMemberAccessibility]: [
                    "warn",
                    {
                        accessibility: "explicit"
                    }
                ],
                [ESLintRule.TypeScriptNoVarRequires]: "warn",
                [ESLintRule.JSDocNoTypes]: [
                    "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                [ESLintRule.JSDocRequireParamType]: "off",
                [ESLintRule.JSDocRequireReturnsType]: "off"
            }
        });

    if (!weak)
    {
        config.overrides.push(
            {
                files: [
                    "*.d.ts"
                ],
                rules: {
                    [ESLintRule.ImportNoDefaultExport]: "off"
                }
            });
    }

    return merge<Linter.Config, Linter.Config, Linter.Config>(
        config,
        {
            rules: {
                [ESLintRule.TSLint]: [
                    "warn",
                    {
                        lintFile: require.resolve(
                            join(
                                __dirname,
                                "TSLint",
                                `${weak ? "Weak" : "Recommended"}${typeChecking ? "WithTypeChecking" : ""}`))
                    }
                ]
            }
        },
        typeChecking ?
            {
                plugins: [
                    ...config.plugins,
                    ESLintPlugin.TSLint
                ],
                rules: {
                    [ESLintRule.TypeScriptAwaitThenable]: "warn",
                    [ESLintRule.TypeScriptNoThrowLiteral]: "warn",
                    [ESLintRule.TypeScriptNoFloatingPromises]: "off",
                    [ESLintRule.TypeScriptNoUnnecessaryBooleanLiteralCompare]: "warn",
                    [ESLintRule.TypeScriptNoUnnecessaryQualifier]: "warn",
                    [ESLintRule.TypeScriptNoUnnecessaryTypeArguments]: "warn",
                    [ESLintRule.TypeScriptNoUnnecessaryTypeAssertion]: "warn",
                    [ESLintRule.TypeScriptPreferIncludes]: "warn",
                    [ESLintRule.TypeScriptPreferNullishCoalescing]: "warn",
                    [ESLintRule.TypeScriptPreferStringStartsEndsWith]: "warn",
                    [ESLintRule.TypeScriptRestrictPlusOperands]: [
                        "warn",
                        {
                            checkCompoundAssignments: true
                        }
                    ],
                    [ESLintRule.NoReturnAwait]: "warn",
                    [ESLintRule.TypeScriptUnboundMethod]: "off",
                    [ESLintRule.Deprecation]: "warn"
                }
            } :
            {});
}
