import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
