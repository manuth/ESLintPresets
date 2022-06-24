import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
