import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
