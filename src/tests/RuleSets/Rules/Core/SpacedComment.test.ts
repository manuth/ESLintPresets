import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.SpacedComment `SpacedComment`} rule.
 */
export let SpacedComment = new RuleSuite(
    ESLintRule.SpacedComment,
    [
        {
            Description: "Checking whether comments must start with a space…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "//test",
                        "/*test*/",
                        "/*test */"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "// test",
                        "/* test*/",
                        "/* test */"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether triple-slash references are treated correctly…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            ///<reference lib="DOM" />`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /// <reference lib="DOM" />`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "//test",
                        "/*test*/",
                        "/*test */"
                    ]
                }
            ]
        }
    ]);
