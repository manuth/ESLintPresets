import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.BraceStyle `BraceStyle`} rule.
 */
export let BraceStyle = new RuleSuite(
    ESLintRule.BraceStyle,
    [
        {
            Description: "Checking whether the brace-style is enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (true) {

                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (true)
                            {

                            }`,
                        `
                            if (true)
                            { }`,
                        "if (true) { }"
                    ]
                }
            ]
        }
    ]);
