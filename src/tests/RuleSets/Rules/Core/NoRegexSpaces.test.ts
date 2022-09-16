import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoRegexSpaces `NoRegexSpaces`} rule.
 */
export let NoRegexSpaces = new RuleSuite(
    ESLintRule.NoRegexSpaces,
    [
        {
            Description: "Checking whether multiple spaces in regular expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "/   /g;"
                    ]
                }
            ]
        }
    ]);
