module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json"
    },
    extends: [
        require.resolve("./lib/Configuration/Recommended"),
        require.resolve("./lib/Configuration/RecommendedWithTypeChecking")
    ]
}
