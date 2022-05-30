import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.BlockSpacing `BlockSpacing`} rule.
 */
export let BlockSpacing = new RuleSuite(
    ESLintRule.BlockSpacing,
    [
        {
            Description: "Checking whether function-blocks must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = () => {return true;};"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { return true; };"
                    ]
                }
            ]
        }
    ]);
