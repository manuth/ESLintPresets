import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SpaceBeforeFunctionParen = new RuleSuite(
    "@typescript-eslint/space-before-function-paren",
    [
        {
            Description: "Checking whether spaces before parens of named and anonymous functions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test () { }",
                        "let x = function () { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test() { }",
                        "let x = function() { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether spaces before parens of async arrow functions are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test = async() => { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let test = async () => { }"
                    ]
                }
            ]
        }
    ]);
