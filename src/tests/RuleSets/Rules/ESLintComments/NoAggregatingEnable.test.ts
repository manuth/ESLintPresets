import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentNoAggregatingEnable} rule.
 */
export let NoAggregatingEnable = new RuleSuite(
    ESLintRule.ESLintCommentNoAggregatingEnable,
    [
        {
            Description: "Checking whether re-enabling multiple `eslint-disable` comments at once is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-disable ${ESLintRule.Curly} */
                            /* eslint-enable */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-disable ${ESLintRule.Curly} */
                            /* eslint-enable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-enable ${ESLintRule.NoConsole} */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-disable ${ESLintRule.Curly} */
                            /* eslint-enable ${ESLintRule.Curly} */
                            /* eslint-enable ${ESLintRule.NoConsole} */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-disable ${ESLintRule.Curly} */
                            /* eslint-enable ${ESLintRule.NoConsole} */
                            /* eslint-enable ${ESLintRule.Curly} */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */
                            /* eslint-enable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */`
                    ]
                }
            ]
        }
    ]);
