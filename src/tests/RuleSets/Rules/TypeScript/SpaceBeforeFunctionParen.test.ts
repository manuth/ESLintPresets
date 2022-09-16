import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptSpaceBeforeFunctionParen `TypeScriptSpaceBeforeFunctionParen`} rule.
 */
export let SpaceBeforeFunctionParen = new RuleSuite(
    ESLintRule.TypeScriptSpaceBeforeFunctionParen,
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
