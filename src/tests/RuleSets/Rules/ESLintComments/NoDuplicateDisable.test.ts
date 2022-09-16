import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentNoDuplicateDisable `ESLintCommentNoDuplicateDisable`} rule.
 */
export let NoDuplicateDisable = new RuleSuite(
    ESLintRule.ESLintCommentNoDuplicateDisable,
    [
        {
            Description: "Checking whether disabling rules using `eslint-disable`-comments twice is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            /* eslint-disable ${ESLintRule.NoConsole} */`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            // eslint-disable-line ${ESLintRule.NoConsole}`,
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */
                            // eslint-disable-next-line ${ESLintRule.NoConsole}`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /* eslint-disable ${ESLintRule.NoConsole} */`,
                        `
                            // eslint-disable-line ${ESLintRule.NoConsole}`,
                        `
                            // eslint-disable-next-line ${ESLintRule.NoConsole}`
                    ]
                }
            ]
        }
    ]);
