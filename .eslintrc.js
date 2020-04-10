module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json"
    },
    extends: [
        require.resolve("./lib/Configuration/RecommendedWithTypeChecking")
    ]
};
