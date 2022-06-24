import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoSparseArrays `NoSparseArrays`} rule.
 */
export let NoSparseArrays = new RuleSuite(
    ESLintRule.NoSparseArrays,
    [
        {
            Description: "Checking whether the rule acts as expected…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = [1,,,,,2];"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = [1,2];"
                    ]
                }
            ]
        }
    ]);
