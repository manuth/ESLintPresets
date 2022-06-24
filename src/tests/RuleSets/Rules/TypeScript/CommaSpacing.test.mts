import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptCommaSpacing `TypeScriptCommaSpacing`} rule.
 */
export let CommaSpacing = new RuleSuite(
    ESLintRule.TypeScriptCommaSpacing,
    [
        {
            Description: "Checking whether commas need to be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test(a,b) { }",
                        "function test(a ,b) { }",
                        "function test(a , b) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(a, b) { }"
                    ]
                }
            ]
        }
    ]);
