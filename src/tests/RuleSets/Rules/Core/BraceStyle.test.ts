import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
