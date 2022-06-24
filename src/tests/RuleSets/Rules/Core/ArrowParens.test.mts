import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ArrowParens `ArrowParens`} rule.
 */
export let ArrowParens = new RuleSuite(
    ESLintRule.ArrowParens,
    [
        {
            Description: "Checking whether arrow-parens aren't enforced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { };",
                        "let x = a => { };",
                        "let x = (a) => { };",
                        "let x = (a, b) => { };"
                    ]
                }
            ]
        }
    ]);
