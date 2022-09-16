import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.OperatorLineBreak `OperatorLineBreak`} rule.
 */
export let OperatorLineBreak = new RuleSuite(
    ESLintRule.OperatorLineBreak,
    [
        {
            Description: "Checking whether operators, if separated by line-breaks must be at the end of the line…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = 1
                                + 2;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = 1 +
                                2;`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = 1
                                + 2;`
                    ]
                }
            ]
        }
    ]);
