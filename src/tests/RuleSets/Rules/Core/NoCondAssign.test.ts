import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoCondAssign `NoCondAssign`} rule.
 */
export let NoCondAssign = new RuleSuite(
    ESLintRule.NoCondAssign,
    [
        {
            Description: "Checking whether assignments in conditionals are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (a = 1) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "if (a == 1) { }",
                        "if (a === 1) { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether assignments in conditionals are allowed if they're wrapped in parentheses…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "if ((a = 1)) { }",
                        "if ((result = doSomething()) === true) { }"
                    ]
                }
            ]
        }
    ]);
