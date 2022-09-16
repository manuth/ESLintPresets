import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
