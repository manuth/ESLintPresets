import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ObjectPropertyNewline `ObjectPropertyNewline`} rule.
 */
export let ObjectPropertyNewLine = new RuleSuite(
    ESLintRule.ObjectPropertyNewline,
    [
        {
            Description: "Checking whether new-lines between object-properties must be consistent…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = {
                                a: "test",
                                b: "test", c: "test"
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                a: "test",
                                b: "test"
                            }`,
                        `
                            let x = { a: "test", b: "test" }`,
                        `
                            let x = {
                                a: "test", b: "test"
                            }`
                    ]
                }
            ]
        }
    ]);
