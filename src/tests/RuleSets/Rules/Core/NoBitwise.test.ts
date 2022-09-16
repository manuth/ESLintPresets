import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
