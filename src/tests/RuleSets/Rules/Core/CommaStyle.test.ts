import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.CommaStyle `CommaStyle`} rule.
 */
export let CommaStyle = new RuleSuite(
    ESLintRule.CommaStyle,
    [
        {
            Description: "Checking whether commas are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                a
                                ,b
                            ]`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = [
                                a,
                                b
                            ]`
                    ]
                }
            ]
        }
    ]);
