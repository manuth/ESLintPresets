import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoEmptyPattern `NoEmptyPattern`} rule.
 */
export let NoEmptyPattern = new RuleSuite(
    ESLintRule.NoEmptyPattern,
    [
        {
            Description: "Checking whether empty patterns are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: {} };"
                    ]
                }
            ]
        }
    ]);
