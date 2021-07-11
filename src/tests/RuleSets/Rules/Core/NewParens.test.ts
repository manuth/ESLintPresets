import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
