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
            Description: "Checking whether both interfaces and types are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "type Test = { id: number }",
                        "interface Test { id: number }",
                        "type Test<T> = T extends number ? string : { id: number };"
                    ]
                }
            ]
        }
    ]);
