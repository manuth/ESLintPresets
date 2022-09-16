import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
