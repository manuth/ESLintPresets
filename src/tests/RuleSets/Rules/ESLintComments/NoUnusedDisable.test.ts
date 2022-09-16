import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentNoUnusedDisable `ESLintCommentNoUnusedDisable`} rule.
 */
export let NoUNusedDisable = new RuleSuite(
    ESLintRule.ESLintCommentNoUnusedDisable,
    [
        {
            Description: "Checking whether unused `eslint-disable` comments are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint no-console: error */
                            /* eslint-disable no-console */
                            function test() { }`,
                        `
                            /* eslint no-console: error */
                            function test() { } // eslint-disable-line ${ESLintRule.NoConsole}`,
                        `
                            /* eslint no-console: error */
                            // eslint-disable-next-line ${ESLintRule.NoConsole}
                            function test() { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* eslint no-console: error */
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            console.log();`,
                        `
                            /* eslint no-console: error */
                            console.log(); // eslint-disable-line ${ESLintRule.NoConsole}`,
                        `
                            /* eslint no-console: error */
                            // eslint-disable-next-line ${ESLintRule.NoConsole}
                            console.log();`
                    ]
                }
            ]
        }
    ]);
