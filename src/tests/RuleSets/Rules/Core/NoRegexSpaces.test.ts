import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
