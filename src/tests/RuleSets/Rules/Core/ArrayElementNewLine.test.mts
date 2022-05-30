import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ArrayElementNewline `ArrayElementNewline`} rule.
 */
export let ArrayElementNewLine = new RuleSuite(
    ESLintRule.ArrayElementNewline,
    [
        {
            Description: "Checking whether new lines between array-elements are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                1, 2,
                                3];`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = [1, 2, 3];",
                        `
                            let x = [
                                1,
                                2,
                                3
                            ]`
                    ]
                }
            ]
        }
    ]);
