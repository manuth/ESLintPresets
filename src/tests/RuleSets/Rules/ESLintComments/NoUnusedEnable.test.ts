import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentNoUnusedEnable `ESLintCommentNoUnusedEnable`} rule.
 */
export let NoUnusedEnable = new RuleSuite(
    ESLintRule.ESLintCommentNoUnusedEnable,
    [
        {
            Description: "Checking whether unnecessary `eslint-enable` comments are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint-enable ${ESLintRule.EQEQEQ} */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-enable ${ESLintRule.EQEQEQ}, ${ESLintRule.NoConsole} */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* eslint-disable ${ESLintRule.EQEQEQ} */
                            /* eslint-enable ${ESLintRule.EQEQEQ} */`,
                        `
                            /* eslint-disable ${ESLintRule.EQEQEQ}, ${ESLintRule.NoConsole} */
                            /* eslint-enable ${ESLintRule.EQEQEQ}, ${ESLintRule.NoConsole} */`
                    ]
                }
            ]
        }
    ]);
