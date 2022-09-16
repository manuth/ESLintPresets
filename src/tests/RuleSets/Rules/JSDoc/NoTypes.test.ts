import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocNoTypes `JSDocNoTypes`} rule.
 */
export let NoTypes = new RuleSuite(
    ESLintRule.JSDocNoTypes,
    [
        {
            Description: "Checking whether types in jsdoc-comments are disallowed for typescript-files…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param {string} test
                             */
                            function test(test) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */
                            function test(test: string) { }`
                    ]
                }
            ]
        }
    ]);
