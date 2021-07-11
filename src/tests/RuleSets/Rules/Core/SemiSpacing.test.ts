import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.SemiSpacing `SemiSpacing`} rule.
 */
export let SemiSpacing = new RuleSuite(
    ESLintRule.SemiSpacing,
    [
        {
            Description: "Checking whether semicolons must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let a = 1;let b = 2;",
                        "let a = 1 ;let b = 2;",
                        "let a = 1 ; let b = 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let a = 1; let b = 2;"
                    ]
                }
            ]
        }
    ]);
