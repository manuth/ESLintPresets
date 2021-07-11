import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.FunctionCallArgumentNewline `FunctionCallArgumentNewline`} rule.
 */
export let FunctionCallArgumentNewLine = new RuleSuite(
    ESLintRule.FunctionCallArgumentNewline,
    [
        {
            Description: "Checking whether new-lines in function calls must be consistent…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            test(a, b,
                                c);`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "test(a, b, c);",
                        `
                            test(
                                a,
                                b,
                                c
                            );`
                    ]
                }
            ]
        }
    ]);
