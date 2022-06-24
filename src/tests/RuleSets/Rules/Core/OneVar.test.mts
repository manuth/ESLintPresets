import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.OneVar `OneVar`} rule.
 */
export let OneVar = new RuleSuite(
    ESLintRule.OneVar,
    [
        {
            Description: "Checking whether multiple var-declarations in one statement are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let a, b = 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let a;
                            let b = 2;`
                    ]
                }
            ]
        }
    ]);
