import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ComputedPropertySpacing `ComputedPropertySpacing`} rule.
 */
export let ComputedPropertySpacing = new RuleSuite(
    ESLintRule.ComputedPropertySpacing,
    [
        {
            Description: "Checking whether spacing in computed properties is enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = {
                                [ "hello" ]: "world"
                            };`,
                        `
                            let x = {
                                ["hello" ]: "world"
                            };`,
                        `
                            let x = {
                                [ "hello"]: "world"
                            };`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                ["hello"]: "world"
                            };`
                    ]
                }
            ]
        }
    ]);
