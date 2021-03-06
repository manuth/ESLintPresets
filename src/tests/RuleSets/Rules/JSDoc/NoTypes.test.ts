import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
