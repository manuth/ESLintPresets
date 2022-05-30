import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptExplicitFunctionReturnType `TypeScriptExplicitFunctionReturnType`} rule.
 */
export let ExplicitFunctionReturnType = new RuleSuite(
    ESLintRule.TypeScriptExplicitFunctionReturnType,
    [
        {
            Description: "Checking whether return-types must be specified…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test() { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(): void { }"
                    ]
                }
            ]
        }
    ]);
