import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.NoControlRegex `NoControlRegex`} rule.
 */
export let NoControlRegex = new RuleSuite(
    ESLintRule.NoControlRegex,
    [
        {
            Description: "Checking whether control-characters in regular expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "/\\0x1f/"
                    ]
                }
            ]
        }
    ]);
