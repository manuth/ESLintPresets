import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
