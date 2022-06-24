import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
