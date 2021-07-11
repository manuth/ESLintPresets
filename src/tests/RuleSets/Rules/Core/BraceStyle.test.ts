import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
