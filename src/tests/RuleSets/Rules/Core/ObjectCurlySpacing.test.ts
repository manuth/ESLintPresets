import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.ObjectCurlySpacing `ObjectCurlySpacing`} rule.
 */
export let ObjectCurlySpacing = new RuleSuite(
    ESLintRule.ObjectCurlySpacing,
    [
        {
            Description: "Checking whether spaces in curly braces are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = {a: 1, b: 2, c: 3};",
                        "let x = {a: 1, b: 2, c: 3 };",
                        "let x = { a: 1, b: 2, c: 3};"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: 1, b: 2, c: 3 };"
                    ]
                }
            ]
        }
    ]);
