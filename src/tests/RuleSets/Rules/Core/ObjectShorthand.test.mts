import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ObjectShorthand `ObjectShorthand`} rule.
 */
export let ObjectShorthand = new RuleSuite(
    ESLintRule.ObjectShorthand,
    [
        {
            Description: "Checking whether non-shorthand object declarations are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = { a: a };",
                        `
                            let x = {
                                test: function () { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a }",
                        `
                            let x = {
                                test() { }
                            }`
                    ]
                }
            ]
        }
    ]);
