import merge = require("lodash.merge");
import type { Configuration } from "tslint";
import { TSLintRule } from "../../TSLintRule.cjs";

/**
 * Generates a `tslint`-configuration.
 *
 * @param weak
 * A value indicating whether a weak ruleset should be generated.
 *
 * @param typeChecking
 * A value indicating whether a ruleset for a workspace with type-checking should be generated.
 *
 * @returns
 * The configuration.
 */
export function GenerateConfiguration(weak: boolean, typeChecking: boolean): Configuration.RawConfigFile
{
    let commonRules = {
        [TSLintRule.OrderedImports]: {
            options: {
                "import-sources-order": "any",
                "named-imports": "case-insensitive"
            }
        }
    } as Configuration.RawRulesConfig;

    let typeScriptRules = {};
    let javaScriptRules = {};

    if (typeChecking)
    {
        commonRules = merge(
            commonRules,
            {
                [TSLintRule.NoVoidExpression]: {
                    options: [
                        "ignore-arrow-function-shorthand"
                    ]
                },
                [TSLintRule.ReturnUndefined]: true
            } as Configuration.RawRulesConfig);

        typeScriptRules = merge(
            typeScriptRules,
            {
                [TSLintRule.MatchDefaultExportName]: true
            } as Configuration.RawRulesConfig);
    }

    return {
        rules: merge(typeScriptRules, commonRules),
        jsRules: merge(javaScriptRules, commonRules)
    } as Configuration.RawConfigFile;
}
