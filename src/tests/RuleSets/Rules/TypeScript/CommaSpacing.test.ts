import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
