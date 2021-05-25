import merge = require("lodash.merge");

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
        "ordered-imports": {
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
                "return-undefined": true
            });

        typeScriptRules = merge(
            typeScriptRules,
            {
                "match-default-export-name": true
            });
    }

    return {
        rules: merge(typeScriptRules, commonRules),
        jsRules: merge(javaScriptRules, commonRules)
    };
}
