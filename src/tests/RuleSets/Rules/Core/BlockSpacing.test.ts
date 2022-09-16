import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
