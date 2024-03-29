import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ObjectCurlyNewline `ObjectCurlyNewline`} rule.
 */
export let ObjectCurlyNewLine = new RuleSuite(
    ESLintRule.ObjectCurlyNewline,
    [
        {
            Description: "Checking whether new-lines after curly braces must be consistent…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = { a: 1, b: 2,
                                c: 3
                            };`,
                        `
                            let x = {
                                a: 1, b: 2, c: 3 }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: 1, b: 2, c: 3 };",
                        `
                            let x = {
                                a: 1, b: 2, c: 3
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether new-lines are forced for multi-line objects…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = { a: "test",
                                b: "test" }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                a: "test",
                                b: "test"
                            }`
                    ]
                }
            ]
        }
    ]);
