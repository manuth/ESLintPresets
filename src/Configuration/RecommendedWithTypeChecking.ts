export = {
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
            "warn",
            {
                rules: {
                    "match-default-export-name": true,
                    "return-undefined": true
                }
            }
        ]
    }
};
