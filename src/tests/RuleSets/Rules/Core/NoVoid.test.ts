import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoVoid `NoVoid`} rule.
 */
export let NoVoid = new RuleSuite(
    ESLintRule.NoVoid,
    [
        {
            Description: "Checking whether the `void` keyword is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "void test;",
                        `
                            function Test()
                            {
                                return void 0;
                            }`
                    ]
                }
            ]
        }
    ]);
