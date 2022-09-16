import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoInferrableTypes `TypeScriptNoInferrableTypes`} rule.
 */
export let NoInferrableTypes = new RuleSuite(
    ESLintRule.TypeScriptNoInferrableTypes,
    [
        {
            Description: "Checking whether inferrable types are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x: string = 'hello world';"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 'hello world';"
                    ]
                }
            ]
        }
    ]);
