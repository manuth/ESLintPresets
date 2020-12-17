const { join } = require("path");

module.exports = {
    extends: [
        require.resolve("./lib/Configuration/RecommendedWithTypeChecking")
    ],
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        project: [
            join(__dirname, "tsconfig.json"),
            join(__dirname, "tsconfig.eslint.json"),
            join(__dirname, "src", "tests", "tsconfig.json")
        ]
    }
};
