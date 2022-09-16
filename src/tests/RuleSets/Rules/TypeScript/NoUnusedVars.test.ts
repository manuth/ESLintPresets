import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoUnusedVars `TypeScriptNoUnusedVars`} rule.
 */
export let NoUnusedVars = new RuleSuite(
    ESLintRule.TypeScriptNoUnusedVars,
    [
        {
            Description: "Checking whether unused variables cause an error…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test;
                            console.log(test);`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether unused arguments are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "function (unused, used) { console.log(used) }",
                        "function (unused) { }"
                    ]
                }
            ]
        }
    ]);
