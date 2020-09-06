import merge = require("lodash.merge");
import { join } from "upath";

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
 * THe configuration.
 */
export function GenerateConfiguration(weak: boolean, typeChecking: boolean): any
{
    let config: any = {
            parser: "@typescript-eslint/parser",
            plugins: [
                "@typescript-eslint",
                "import",
                "jsdoc"
            ],
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            rules: {
                "@typescript-eslint/adjacent-overload-signatures": "warn",
                "@typescript-eslint/array-type": [
                    weak ? "off" : "warn",
                    {
                        default: "array-simple"
                    }
                ],
                "@typescript-eslint/ban-ts-comment": "off",
                "@typescript-eslint/ban-types": "error",
                "@typescript-eslint/camelcase": "off",
                "@typescript-eslint/class-name-casing": "off",
                "@typescript-eslint/comma-spacing": "warn",
                "@typescript-eslint/consistent-type-assertions": "warn",
                "@typescript-eslint/consistent-type-definitions": [
                    "warn",
                    "interface"
                ],
                "@typescript-eslint/default-param-last": "error",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/explicit-module-boundary-types": [
                    "warn",
                    {
                        allowArgumentsExplicitlyTypedAsAny: true
                    }
                ],
                "@typescript-eslint/func-call-spacing": "warn",
                // "@typescript-eslint/indent": [
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
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/member-delimiter-style": [
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
                "@typescript-eslint/member-ordering": [
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
                "@typescript-eslint/naming-convention": [
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
                "@typescript-eslint/no-empty-function": "off",
                "@typescript-eslint/no-empty-interface": "off",
                "@typescript-eslint/no-explicit-any": "off",
                "@typescript-eslint/no-for-in-array": weak ? "off" : "error",
                "@typescript-eslint/no-inferrable-types": weak ? "off" : "error",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": [
                    "warn",
                    {
                        allowDeclarations: true,
                        allowDefinitionFiles: true
                    }
                ],
                "@typescript-eslint/no-parameter-properties": "error",
                "@typescript-eslint/no-this-alias": "off",
                "@typescript-eslint/no-unused-expressions": "warn",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-use-before-define": [
                    "warn",
                    {
                        functions: false,
                        classes: false,
                        variables: true
                    }
                ],
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/prefer-as-const": "warn",
                "@typescript-eslint/prefer-for-of": "warn",
                "@typescript-eslint/prefer-function-type": "warn",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/prefer-optional-chain": "warn",
                "@typescript-eslint/quotes": [
                    "warn",
                    "double",
                    {
                        avoidEscape: true
                    }
                ],
                "@typescript-eslint/semi": [
                    "error",
                    "always"
                ],
                "@typescript-eslint/space-before-function-paren": [
                    "warn",
                    {
                        anonymous: "never",
                        asyncArrow: "always",
                        named: "never"
                    }
                ],
                "@typescript-eslint/triple-slash-reference": "off",
                "@typescript-eslint/type-annotation-spacing": "warn",
                "@typescript-eslint/unified-signatures": "off",
                "array-bracket-newline": [
                    "warn",
                    "consistent"
                ],
                "array-bracket-spacing": "warn",
                "array-element-newline": [
                    "warn",
                    "consistent"
                ],
                "arrow-parens": [
                    "off",
                    "as-needed"
                ],
                "arrow-spacing": "warn",
                "block-spacing": "warn",
                "brace-style": [
                    "warn",
                    "allman",
                    {
                        allowSingleLine: true
                    }
                ],
                "comma-dangle": weak ? "off" : "error",
                "comma-style": "warn",
                complexity: "off",
                "computed-property-spacing": "warn",
                "constructor-super": "error",
                curly: "off",
                "dot-notation": "off",
                "eol-last": "warn",
                eqeqeq: [
                    "warn",
                    "always"
                ],
                "function-call-argument-newline": [
                    "warn",
                    "consistent"
                ],
                "generator-star-spacing": [
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
                "grouped-accessor-pairs": "warn",
                "guard-for-in": "off",
                "import/no-default-export": weak ? "off" : "warn",
                "import/no-duplicates": weak ? "off" : "warn",
                "import/order": [
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
                "jsdoc/check-alignment": weak ? "off" : "warn",
                "jsdoc/check-indentation": weak ? "off" : "warn",
                "jsdoc/check-param-names": weak ? "off" : "warn",
                "jsdoc/check-syntax": weak ? "off" : "warn",
                "jsdoc/check-tag-names": "warn",
                "jsdoc/check-values": "warn",
                "jsdoc/empty-tags": "warn",
                "jsdoc/newline-after-description": weak ? "off" : "warn",
                "jsdoc/require-description": [
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
                "jsdoc/require-jsdoc": [
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
                "jsdoc/require-param-description": [
                    weak ? "off" : "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                "jsdoc/require-param-name": [
                    "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                "jsdoc/require-param-type": [
                    weak ? "off" : "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                "jsdoc/require-param": [
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
                "jsdoc/require-returns-type": [
                    weak ? "off" : "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                "jsdoc/require-returns": [
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
                "lines-between-class-members": "warn",
                "max-classes-per-file": "off",
                "max-len": "off",
                "multiline-ternary": [
                    "warn",
                    "always-multiline"
                ],
                "new-parens": "warn",
                "no-async-promise-executor": "off",
                "no-bitwise": "off",
                "no-caller": "error",
                "no-case-declarations": "off",
                "no-cond-assign": "error",
                "no-console": "off",
                "no-constant-condition": "warn",
                "no-constructor-return": "error",
                "no-control-regex": "off",
                "no-debugger": "warn",
                "no-duplicate-case": "error",
                "no-empty": "off",
                "no-empty-pattern": "off",
                "no-eval": "warn",
                "no-fallthrough": "error",
                "no-floating-decimal": "error",
                "no-implicit-coercion": "warn",
                "no-inner-declarations": "off",
                "no-invalid-this": "off",
                "no-lonely-if": "warn",
                "no-multiple-empty-lines": [
                    "warn",
                    {
                        max: 1,
                        maxBOF: 0,
                        maxEOF: 0
                    }
                ],
                "no-multi-spaces": "warn",
                "no-new-wrappers": "error",
                "no-octal-escape": "warn",
                "no-regex-spaces": "off",
                "no-return-await": "warn",
                "no-sequences": "error",
                "no-shadow": "off",
                "no-sparse-arrays": "error",
                "no-throw-literal": "error",
                "no-trailing-spaces": "warn",
                "no-undef-init": "warn",
                "no-unreachable": "off",
                "no-unsafe-finally": "error",
                "no-unused-labels": "warn",
                "no-useless-catch": "off",
                "no-useless-rename": "warn",
                "no-var": "error",
                "no-void": "warn",
                "no-whitespace-before-property": "warn",
                "object-curly-newline": "warn",
                "object-curly-spacing": [
                    "warn",
                    "always"
                ],
                "object-property-newline": [
                    "warn",
                    {
                        allowAllPropertiesOnSameLine: true
                    }
                ],
                "object-shorthand": "warn",
                "one-var": [
                    "warn",
                    "never"
                ],
                "operator-linebreak": [
                    weak ? "off" : "warn",
                    "after"
                ],
                "padded-blocks": [
                    weak ? "off" : "warn",
                    "never"
                ],
                "padding-line-between-statements": [
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
                "prefer-const": "off",
                "prefer-object-spread": "warn",
                "prefer-rest-params": "warn",
                "prefer-spread": "warn",
                "quote-props": [
                    weak ? "off" : "warn",
                    "as-needed"
                ],
                "rest-spread-spacing": "warn",
                "semi-spacing": "warn",
                "semi-style": "warn",
                "space-before-blocks": "warn",
                "space-in-parens": "warn",
                "space-infix-ops": "warn",
                "space-unary-ops": "warn",
                "spaced-comment": weak ? "off" : "warn",
                "switch-colon-spacing": "warn",
                "template-curly-spacing": "warn",
                "use-isnan": "warn",
                "yield-star-spacing": "warn",
                yoda: "warn"
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
                "valid-typeof": "error"
            }
        },
        {
            files: [
                "*.ts",
                "*.tsx"
            ],
            rules: {
                "@typescript-eslint/explicit-member-accessibility": [
                    "warn",
                    {
                        accessibility: "explicit"
                    }
                ],
                "@typescript-eslint/explicit-function-return-type": [
                    "warn",
                    {
                        allowExpressions: true
                    }
                ],
                "@typescript-eslint/no-var-requires": "warn",
                "jsdoc/no-types": [
                    "warn",
                    {
                        contexts: [
                            "any"
                        ]
                    }
                ],
                "jsdoc/require-param-type": "off",
                "jsdoc/require-returns-type": "off"
            }
        });

    return merge(
        config,
        typeChecking ?
            {
                plugins: [
                    "@typescript-eslint/tslint"
                ],
                rules: {
                    "@typescript-eslint/await-thenable": "warn",
                    "@typescript-eslint/no-throw-literal": "warn",
                    "@typescript-eslint/no-floating-promises": "off",
                    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
                    "@typescript-eslint/no-unnecessary-qualifier": "warn",
                    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
                    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
                    "@typescript-eslint/prefer-includes": "warn",
                    "@typescript-eslint/prefer-nullish-coalescing": "warn",
                    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
                    "@typescript-eslint/restrict-plus-operands": [
                        "warn",
                        {
                            checkCompoundAssignments: true
                        }
                    ],
                    "@typescript-eslint/return-await": "warn",
                    "@typescript-eslint/unbound-method": "off",
                    "@typescript-eslint/tslint/config": [
                        weak ? "off" : "warn",
                        {
                            lintFile: join(__dirname, "..", "..", "tslint.json")
                        }
                    ]
                }
            } :
            {});
}
