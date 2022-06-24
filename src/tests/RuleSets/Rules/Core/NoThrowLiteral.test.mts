import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoThrowLiteral `NoThrowLiteral`} rule.
 */
export let NoThrowLiteral = new RuleSuite(
    ESLintRule.NoThrowLiteral,
    [
        {
            Description: "Checking whether throwing literals is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'throw "Hello World";'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'throw new Error("Hello World");'
                    ]
                }
            ]
        }
    ]);
