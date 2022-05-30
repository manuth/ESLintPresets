import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
