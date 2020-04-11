import merge = require("lodash.merge");
const esLintRecommended: any = require("@typescript-eslint/eslint-plugin").configs["eslint-recommended"];

let config = merge({}, esLintRecommended);

for (let override of config.overrides)
{
    override.files.push("*.js", "*.jsx");
}

export = config;
