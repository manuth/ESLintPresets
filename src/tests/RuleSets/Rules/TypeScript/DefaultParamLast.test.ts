import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptDefaultParamLast `TypeScriptDefaultParamLast`} rule.
 */
export let DefaultParamLast = new RuleSuite(
    ESLintRule.TypeScriptDefaultParamLast,
    [
        {
            Description: "Checking whether default-parameters must be declared after required parameters…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test(a?, b) { }",
                        "function test(a = 1, b) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(a, b?) { }",
                        "function test(a, b = 1) { }",
                        "function test(a, b?, c = 1) { }",
                        "function test(a, b = 1, c?) { }"
                    ]
                }
            ]
        }
    ]);
