import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
