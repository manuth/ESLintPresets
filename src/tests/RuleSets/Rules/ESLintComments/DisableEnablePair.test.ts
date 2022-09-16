import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentDisableEnablePair `ESLintCommentDisableEnablePair`} rule.
 */
export let DisableEnablePair = new RuleSuite(
    ESLintRule.ESLintCommentDisableEnablePair,
    [
        {
            Description: "Checking whether all `eslint-disable` comments must have a corresponding `eslint-enable` comment…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            console.log();
                            /* eslint-disable ${ESLintRule.NoConsole} */`,
                        `
                            console.log();
                            /* eslint-disable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */
                            console.log();
                            /* eslint-enable ${ESLintRule.NoConsole} */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            console.log();
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            console.log();
                            /* eslint-enable ${ESLintRule.NoConsole} */`,
                        `
                            console.log();
                            /* eslint-disable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */
                            console.log();
                            /* eslint-enable ${ESLintRule.NoConsole}, ${ESLintRule.Curly} */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether rules may be disabled for whole files…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            // eslint-disable ${ESLintRule.NoConsole}
                            console.log();`,
                        `
                            // eslint-disable ${ESLintRule.NoConsole}, ${ESLintRule.Curly}
                            console.log();`
                    ]
                }
            ]
        }
    ]);
