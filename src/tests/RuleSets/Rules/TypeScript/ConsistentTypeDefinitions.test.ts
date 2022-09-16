import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptConsistentTypeDefinitions `TypeScriptConsistentTypeDefinitions`} rule.
 */
export let ConsistentTypeDefinitions = new RuleSuite(
    ESLintRule.TypeScriptConsistentTypeDefinitions,
    [
        {
            Description: "Checking whether types must be declared as interfaces…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "type Test = { id: number }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "interface Test { id: number }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether inferred type-declarations are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "type Test<T> = T extends number ? string : object;"
                    ]
                }
            ]
        }
    ]);
