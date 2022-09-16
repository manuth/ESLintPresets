import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ArrowSpacing `ArrowSpacing`} rule.
 */
export let ArrowSpacing = new RuleSuite(
    ESLintRule.ArrowSpacing,
    [
        {
            Description: "Checking whether arrow functions must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = ()=>{}"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { }"
                    ]
                }
            ]
        }
    ]);
