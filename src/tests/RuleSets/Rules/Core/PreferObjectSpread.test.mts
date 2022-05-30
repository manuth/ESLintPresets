import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.PreferObjectSpread `PreferObjectSpread`} rule.
 */
export let PreferObjectSpread = new RuleSuite(
    ESLintRule.PreferObjectSpread,
    [
        {
            Description: "Checking whether object-spreading is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let test = {};
                            let x = Object.assign({}, test);`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = {};
                            let x = {
                                ...test
                            };`
                    ]
                }
            ]
        }
    ]);
