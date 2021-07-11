import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.RestSpreadSpacing `RestSpreadSpacing`} rule.
 */
export let RestSpreadSpacing = new RuleSuite(
    ESLintRule.RestSpreadSpacing,
    [
        {
            Description: "Checking whether the spacing of the rest-parameter is enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "Math.max(... args);"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "Math.max(...args);"
                    ]
                }
            ]
        }
    ]);
