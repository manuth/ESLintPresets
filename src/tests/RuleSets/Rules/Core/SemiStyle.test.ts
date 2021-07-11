import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.SemiStyle `SemiStyle`} rule.
 */
export let SemiStyle = new RuleSuite(
    ESLintRule.SemiStyle,
    [
        {
            Description: "Checking whether semicolons must be at the end of the line rather than at the beginning…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let a = 1
                            ; let b = 2
                            ; let c = 3`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let a = 1;
                            let b = 2;
                            let c = 3;`
                    ]
                }
            ]
        }
    ]);
