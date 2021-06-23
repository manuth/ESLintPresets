import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
