import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ESLintCommentNoUnlimitedDisable `ESLintCommentNoUnlimitedDisable`} rule.
 */
export let NoUnlimitedDisable = new RuleSuite(
    ESLintRule.ESLintCommentNoUnlimitedDisable,
    [
        {
            Description: "Checking whether unrestricted `eslint-disable` comments are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /* eslint-disable */`,
                        `
                            // eslint-disable-line`,
                        `
                            // eslint-disable-next-line`
                    ]
                }
            ]
        }
    ]);
