import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
