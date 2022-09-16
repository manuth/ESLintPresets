import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
