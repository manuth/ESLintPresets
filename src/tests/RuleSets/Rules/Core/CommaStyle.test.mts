import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
