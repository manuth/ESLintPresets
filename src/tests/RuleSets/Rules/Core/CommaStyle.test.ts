import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
