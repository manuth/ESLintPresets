import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptConsistentTypeAssertions `TypeScriptConsistentTypeAssertions`} rule.
 */
export let ConsistentTypeAssertions = new RuleSuite(
    ESLintRule.TypeScriptConsistentTypeAssertions,
    [
        {
            Description: "Checking whether types must be asserted consistently…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = <any>1;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 1 as any;"
                    ]
                }
            ]
        }
    ]);
