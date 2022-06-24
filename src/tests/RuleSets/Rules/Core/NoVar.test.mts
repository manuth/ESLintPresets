import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoVar `NoVar`} rule.
 */
export let NoVar = new RuleSuite(
    ESLintRule.NoVar,
    [
        {
            Description: "Checking whether declaring `var`s is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "var x;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x;"
                    ]
                }
            ]
        }
    ]);
