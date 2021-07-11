import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
