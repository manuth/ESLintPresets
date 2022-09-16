import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.SpaceInParens `SpaceInParens`} rule.
 */
export let SpaceInParens = new RuleSuite(
    ESLintRule.SpaceInParens,
    [
        {
            Description: "Checking whether spaces in parentheses are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test( a, b ) { }",
                        "function test(a, b ) { }",
                        "function test( a, b) { }",
                        "test( a, b );",
                        "test( a, b);",
                        "test(a, b );",
                        "if ( test ) { }",
                        "if (test ) { }",
                        "if ( test) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(a, b) { }",
                        "test(a, b);",
                        "if (test) { }"
                    ]
                }
            ]
        }
    ]);
