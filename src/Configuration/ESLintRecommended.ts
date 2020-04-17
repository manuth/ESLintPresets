import merge = require("lodash.merge");
const esLintRecommended: any = require("@typescript-eslint/eslint-plugin").configs["eslint-recommended"];

let ESLintRecommended = merge({}, esLintRecommended);
export = ESLintRecommended;
