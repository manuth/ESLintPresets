import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ArrayBracketNewLine `ArrayBracketNewLine`} rule.
 */
export let ArrayBracketNewLine = new RuleSuite(
    ESLintRule.ArrayBracketNewLine,
    [
        {
            Description: "Checking whether consistent newlines are required between array-brackets…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                1,
                                2]`,
                        `
                            let x = [1,
                                2
                                ]`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = [1,2]",
                        `
                            let x = [1,
                                2]`,
                        `
                            let x = [
                                1,
                                2
                            ]`
                    ]
                }
            ]
        }
    ]);
