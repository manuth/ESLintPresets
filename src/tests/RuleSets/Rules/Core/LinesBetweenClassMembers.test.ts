import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.LinesBetweenClassMembers `LinesBetweenClassMembers`} rule.
 */
export let LinesBetweenClassMembers = new RuleSuite(
    ESLintRule.LinesBetweenClassMembers,
    [
        {
            Description: "Checking whether class-members must be separated by a blank line…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test {
                                Method1() { }
                                Method2() { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test {
                                Method1() { }

                                Method2() { }
                            }`
                    ]
                }
            ]
        }
    ]);
