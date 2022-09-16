import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
