import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
