import merge = require("lodash.merge");
const esLintRecommended: any = require("@typescript-eslint/eslint-plugin").configs["eslint-recommended"];

let ESLintRecommended = merge({}, esLintRecommended);

for (let override of ESLintRecommended.overrides)
{
    override.files.push("*.js", "*.jsx");
}

export = ESLintRecommended;