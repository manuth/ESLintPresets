import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptPreferFunctionType `TypeScriptPreferFunctionType`} rule.
 */
export let PreferFunctionType = new RuleSuite(
    ESLintRule.TypeScriptPreferFunctionType,
    [
        {
            Description: "Checking whether coders are encouraged to use function-types rather than call-signatures…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test(a: { (): void }) { }",
                        "interface Test { (): void }",
                        "type Test = { (): void }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(a: () => void) { }",
                        "function test(a: { (): void, b: boolean }) { }",
                        "interface Test { (): void, b: boolean }",
                        "type Test = () => void;",
                        "type test = { (): void; b: number }"
                    ]
                }
            ]
        }
    ]);
