import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentRequireDescription `ESLintCommentRequireDescription`} rule.
 */
export let RequireDescription = new RuleSuite(
    ESLintRule.ESLintCommentRequireDescription,
    [
        {
            Description: "Checking whether `eslint` directive comments require a description…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint ${ESLintRule.NoConsole}: error */`,
                        `
                            /* eslint-disable */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */`,
                        `
                            // eslint-disable-line`,
                        `
                            // eslint-disable-line ${ESLintRule.NoConsole}`,
                        `
                            // eslint-disable-next-line`,
                        `
                            // eslint-disable-next-line ${ESLintRule.NoConsole}`,
                        `
                            /* eslint-enable */`,
                        `
                            /* eslint-enable ${ESLintRule.NoConsole} */`,
                        `
                            /* eslint-env browser */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* eslint ${ESLintRule.NoConsole}: error -- This file has its own unique config! */`,
                        `
                            /* eslint-disable -- linting this file is not necessary */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} -- This script writes log messages to the console */`,
                        `
                            // eslint-disable-line -- Errors in this line don't really matter that much`,
                        `
                            // eslint-disable-line ${ESLintRule.NoConsole} -- this statement is used for debug purposes`,
                        `
                            // eslint-disable-next-line -- Linting the next line is not necessary`,
                        `
                            // eslint-disable-next-line ${ESLintRule.NoConsole} -- Console calls are allowed on the next line`,
                        `
                            /* eslint-enable -- end of unsafe statement */`,
                        `
                            /* eslint-enable ${ESLintRule.NoConsole} -- end of segment containing console-calls */`,
                        `
                            /* eslint-env browser -- This script is intended for browsers */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether comments are not required for some comments…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* exported foo */`,
                        `
                            /* global $ */`,
                        `
                            /* globals a, b, c */`
                    ]
                }
            ]
        }
    ]);
