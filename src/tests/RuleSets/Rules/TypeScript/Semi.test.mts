import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptSemi `TypeScriptSemi`} rule.
 */
export let Semi = new RuleSuite(
    ESLintRule.TypeScriptSemi,
    [
        {
            Description: "Checking whether semicolons at the end of expressions are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "test()"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "test();"
                    ]
                }
            ]
        }
    ]);
