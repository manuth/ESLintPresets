import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NewParens `NewParens`} rule.
 */
export let NewParens = new RuleSuite(
    ESLintRule.NewParens,
    [
        {
            Description: "Checking whether `new`-expressions without parentheses are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = new Map;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = new Map();"
                    ]
                }
            ]
        }
    ]);
