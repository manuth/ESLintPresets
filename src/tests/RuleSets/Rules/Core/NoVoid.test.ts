import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
