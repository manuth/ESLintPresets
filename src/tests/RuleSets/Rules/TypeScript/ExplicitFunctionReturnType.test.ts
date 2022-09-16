import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
