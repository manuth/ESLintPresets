import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
