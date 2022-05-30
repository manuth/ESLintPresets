import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocNewlineAfterDescription `JSDocNewlineAfterDescription`} rule.
 */
export let NewLineAfterDescription = new RuleSuite(
    ESLintRule.JSDocNewlineAfterDescription,
    [
        {
            Description: "Checking whether a new line after the jsdoc-body is required…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * Test.
                             * @param a
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * Test.
                             *
                             * @param a
                             */`
                    ]
                }
            ]
        }
    ]);
