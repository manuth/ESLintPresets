module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        es6: true
    },
    parserOptions: {
        sourceType: "module",
        project: "tsconfig.json"
    },
    extends: [
        require.resolve("./lib/Configuration/RecommendedWithTypeChecking")
    ]
};
