import merge = require("lodash.merge");

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
            "jsdoc",
            "prefer-arrow"
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
            "@typescript-eslint/ban-ts-ignore": "off",
            "@typescript-eslint/ban-types": "warn",
            "@typescript-eslint/camelcase": "off",
            "@typescript-eslint/class-name-casing": "off",
            "@typescript-eslint/comma-spacing": "warn",
            "@typescript-eslint/consistent-type-assertions": "warn",
            "@typescript-eslint/consistent-type-definitions": [
                "warn",
                "interface"
            ],
            "@typescript-eslint/default-param-last": "warn",
            "@typescript-eslint/explicit-function-return-type": "off",
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
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    }
                }
            ],
            "@typescript-eslint/member-ordering": weak ? "off" : "warn",
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
                    format: [],
                    custom: {
                        regex: "^T([A-Z][A-Za-z]+)?$",
                        match: true
                    }
                }
            ],
            "@typescript-eslint/no-dupe-class-members": "warn",
            "@typescript-eslint/no-dynamic-delete": weak ? "off" : "warn",
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-for-in-array": "off",
            "@typescript-eslint/no-inferrable-types": weak ? "off" : "warn",
            "@typescript-eslint/no-misused-new": "warn",
            "@typescript-eslint/no-namespace": "warn",
            "@typescript-eslint/no-parameter-properties": "warn",
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-use-before-define": [
                "warn",
                {
                    functions: false,
                    classes: false,
                    variables: true
                }
            ],
            "@typescript-eslint/no-var-requires": "warn",
            "@typescript-eslint/prefer-for-of": "warn",
            "@typescript-eslint/prefer-function-type": "warn",
            "@typescript-eslint/prefer-namespace-keyword": "warn",
            "@typescript-eslint/prefer-optional-chain": "warn",
            "@typescript-eslint/quotes": [
                "warn",
                "double",
                {
                    avoidEscape: true
                }
            ],
            "@typescript-eslint/semi": [
                "warn",
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
            "@typescript-eslint/unbound-method": "off",
            "@typescript-eslint/unified-signatures": "warn",
            "array-bracket-spacing": "warn",
            "array-bracket-newline": [
                "warn",
                "consistent"
            ],
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
            "comma-dangle": weak ? "off" : "warn",
            "comma-style": "warn",
            complexity: "off",
            "computed-property-spacing": "warn",
            "constructor-super": "warn",
            curly: "warn",
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
            "generator-star-spacing": "warn",
            "grouped-accessor-pairs": "warn",
            "guard-for-in": "off",
            "id-match": "warn",
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
                        caseInsensitive: false
                    }
                }
            ],
            "jsdoc/check-alignment": weak ? "off" : "warn",
            "jsdoc/check-examples": weak ? "off" : "warn",
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
                    exemptedBy: [
                        "inheritdoc"
                    ],
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
                        "TSTypeAliasDeclaration",
                        "TSPropertySignature",
                        "TSAbstractMethodDefinition"
                    ]
                }
            ],
            "jsdoc/require-jsdoc": [
                weak ? "off" : "warn",
                {
                    require: {
                        ClassDeclaration: true,
                        ClassExpression: true,
                        ArrowFunctionExpression: true,
                        FunctionDeclaration: true,
                        FunctionExpression: true,
                        MethodDefinition: true
                    },
                    contexts: [
                        "TSEnumDeclaration",
                        "TSEnumMember",
                        "TSInterfaceDeclaration",
                        "ClassProperty",
                        "TSTypeAliasDeclaration",
                        "TSPropertySignature",
                        "TSAbstractMethodDefinition"
                    ]
                }
            ],
            "jsdoc/require-param-description": weak ? "off" : "warn",
            "jsdoc/require-param-name": "warn",
            "jsdoc/require-param-type": weak ? "off" : "warn",
            "jsdoc/require-param": weak ? "off" : "warn",
            "jsdoc/require-property-name": "warn",
            "jsdoc/require-property-type": weak ? "off" : "warn",
            "jsdoc/require-returns-description": weak ? "off" : "warn",
            "jsdoc/require-returns-type": weak ? "off" : "warn",
            "jsdoc/require-returns": [
                weak ? "off" : "warn",
                {
                    checkGetters: false
                }
            ],
            "lines-between-class-members": "warn",
            "max-classes-per-file": "off",
            "multiline-ternary": [
                "warn",
                "always-multiline"
            ],
            "max-len": "off",
            "new-parens": "warn",
            "no-async-promise-executor": "off",
            "no-bitwise": "off",
            "no-caller": "warn",
            "no-case-declarations": "off",
            "no-cond-assign": "warn",
            "no-console": "off",
            "no-constant-condition": "off",
            "no-control-regex": "off",
            "no-constructor-return": "warn",
            "no-debugger": "warn",
            "no-duplicate-case": "warn",
            "no-empty": "off",
            "no-empty-pattern": "off",
            "no-eval": "warn",
            "no-fallthrough": "off",
            "no-floating-decimal": "warn",
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
            "no-new-wrappers": "warn",
            "no-octal-escape": "warn",
            "no-regex-spaces": "off",
            "no-return-await": "warn",
            "no-sequences": "warn",
            "no-shadow": "off",
            "no-sparse-arrays": "warn",
            "no-throw-literal": "off",
            "no-trailing-spaces": weak ? "off" : "warn",
            "no-undef-init": "warn",
            "no-underscore-dangle": "warn",
            "no-unsafe-finally": "warn",
            "no-unused-labels": "warn",
            "no-useless-catch": "off",
            "no-useless-rename": "warn",
            "no-var": "warn",
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
            "operator-linebreak": ["warn", "after"],
            "padded-blocks": ["warn", "never"],
            "padding-line-between-statements": [
                "warn",
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
            radix: "warn",
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
            "valid-typeof": "off",
            "yield-star-spacing": "warn",
            yoda: "warn"
        },
        overrides: [
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
                    "jsdoc/no-types": [
                        "warn",
                        {
                            contexts: [
                                "any"
                            ]
                        }
                    ],
                    "jsdoc/require-param-type": "off",
                    "jsdoc/require-property-type": "off",
                    "jsdoc/require-returns-type": "off"
                }
            }
        ]
    };

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
                "@typescript-eslint/tslint/config": [
                    weak ? "off" : "warn",
                    {
                        rules: {
                            "match-default-export-name": true,
                            "return-undefined": true
                        }
                    }
                ]
            }
        } :
        {});
}