import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.QuoteProps `QuoteProps`} rule.
 */
export let QuoteProps = new RuleSuite(
    ESLintRule.QuoteProps,
    [
        {
            Description: "Checking whether properties must not be quoted unless it's necessary…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = {
                                "test": 1
                            };`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                test: 1
                            };`,
                        `
                            let x = {
                                "a-test": 1
                            };`
                    ]
                }
            ]
        }
    ]);
