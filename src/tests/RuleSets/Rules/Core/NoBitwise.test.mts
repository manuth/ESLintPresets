import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoBitwise `NoBitwise`} rule.
 */
export let NoBitwise = new RuleSuite(
    ESLintRule.NoBitwise,
    [
        {
            Description: "Checking whether bitwise operators are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "console.log(1 || 2)"
                    ]
                }
            ]
        }
    ]);
