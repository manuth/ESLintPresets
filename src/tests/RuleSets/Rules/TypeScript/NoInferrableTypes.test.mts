import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
