import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
