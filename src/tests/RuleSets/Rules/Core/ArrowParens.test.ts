import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
