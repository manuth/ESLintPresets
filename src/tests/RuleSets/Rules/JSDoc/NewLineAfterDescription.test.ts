import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
