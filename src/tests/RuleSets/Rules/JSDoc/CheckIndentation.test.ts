import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckIndentation `JSDocCheckIndentation`} rule.
 */
export let CheckIndentation = new RuleSuite(
    ESLintRule.JSDocCheckIndentation,
    [
        {
            Description: "Checking whether the parameter names must be matching…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param a
                             *  Test
                             */
                            function test(a) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param a
                             * Test
                             */
                            function test(a) { }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the indentation is ignored for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param a
                             *  Test
                             */
                            function test(a) { }`
                    ]
                }
            ]
        }
    ]);
