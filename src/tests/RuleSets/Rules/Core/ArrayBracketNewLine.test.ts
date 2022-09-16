import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
