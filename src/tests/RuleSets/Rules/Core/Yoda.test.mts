import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.Yoda `Yoda`} rule.
 */
export let Yoda = new RuleSuite(
    ESLintRule.Yoda,
    [
        {
            Description: "Checking whether comparisons must look correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'if ("red" === color) { }'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'if (color === "red") { }'
                    ]
                }
            ]
        }
    ]);
