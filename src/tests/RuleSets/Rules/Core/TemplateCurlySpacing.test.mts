import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
