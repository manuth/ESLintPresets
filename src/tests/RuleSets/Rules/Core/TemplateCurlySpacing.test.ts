import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.TemplateCurlySpacing `TemplateCurlySpacing`} rule.
 */
export let TemplateCurlySpacing = new RuleSuite(
    ESLintRule.TemplateCurlySpacing,
    [
        {
            Description: "Checking whether spaces at the beginning and the end of template-expressions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "`${ test }`",
                        "`${test }`",
                        "`${ test}`"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "`${test}`"
                    ]
                }
            ]
        }
    ]);
