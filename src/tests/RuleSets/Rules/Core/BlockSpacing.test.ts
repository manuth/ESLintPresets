import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
