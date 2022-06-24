import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.PreferSpread `PreferSpread`} rule.
 */
export let PreferSpread = new RuleSuite(
    ESLintRule.PreferSpread,
    [
        {
            Description: "Checking whether array-spreading is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let args = [1, 2, 3, 4];
                            Math.max.apply(Math, args);`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let args = [1, 2, 3, 4];
                            Math.max(...args);`
                    ]
                }
            ]
        }
    ]);
