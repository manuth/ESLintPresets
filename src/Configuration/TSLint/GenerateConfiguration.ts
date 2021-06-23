import merge = require("lodash.merge");
import { TSLintRule } from "../../TSLintRule";

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
export function GenerateConfiguration(weak: boolean, typeChecking: boolean): any
{
    let commonRules = {
        [TSLintRule.OrderedImports]: {
            options: {
                "import-sources-order": "any",
                "named-imports": "case-insensitive"
            }
        }
    };

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
            });

        typeScriptRules = merge(
            typeScriptRules,
            {
                [TSLintRule.MatchDefaultExportName]: true
            });
    }

    return {
        rules: merge(typeScriptRules, commonRules),
        jsRules: merge(javaScriptRules, commonRules)
    };
}
