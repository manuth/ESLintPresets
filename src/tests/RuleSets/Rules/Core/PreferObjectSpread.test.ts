import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
