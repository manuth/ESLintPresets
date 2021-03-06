import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
