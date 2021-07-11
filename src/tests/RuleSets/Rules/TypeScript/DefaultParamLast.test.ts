import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
