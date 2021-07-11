import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
