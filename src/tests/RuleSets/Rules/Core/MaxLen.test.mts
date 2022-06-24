import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.MaxLen `MaxLen`} rule.
 */
export let MaxLen = new RuleSuite(
    ESLintRule.MaxLen,
    [
        {
            Description: "Checking whether lengths of lines aren't limited…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "test".repeat(1000)
                    ]
                }
            ]
        }
    ]);
