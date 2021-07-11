import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
