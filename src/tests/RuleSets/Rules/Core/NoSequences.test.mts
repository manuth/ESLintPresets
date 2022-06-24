import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoSequences `NoSequences`} rule.
 */
export let NoSequences = new RuleSuite(
    ESLintRule.NoSequences,
    [
        {
            Description: "Checking whether comma-sequence are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "a += 1, 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "a += 1;"
                    ]
                }
            ]
        }
    ]);
