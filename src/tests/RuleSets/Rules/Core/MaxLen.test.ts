import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
