import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
