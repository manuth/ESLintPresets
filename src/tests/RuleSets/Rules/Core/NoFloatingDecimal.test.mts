import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoFloatingDecimal `NoFloatingDecimal`} rule.
 */
export let NoFloatingDecimal = new RuleSuite(
    ESLintRule.NoFloatingDecimal,
    [
        {
            Description: "Checking whether decimal points without a leading number or zero are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        ".2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "0.2;"
                    ]
                }
            ]
        }
    ]);
