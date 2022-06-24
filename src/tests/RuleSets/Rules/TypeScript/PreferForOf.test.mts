import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptPreferForOf `TypeScriptPreferForOf`} rule.
 */
export let PreferForOf = new RuleSuite(
    ESLintRule.TypeScriptPreferForOf,
    [
        {
            Description: "Checking whether `for ... of` loops are preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let test = [];

                            for (let i = 0; i < test.length; i++)
                            {
                                console.log(test[i]);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            for (let value of [])
                            {
                                console.log(value);
                            }`
                    ]
                }
            ]
        }
    ]);
