import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoEmptyInterface `TypeScriptNoEmptyInterface`} rule.
 */
export let NoEmptyInterface = new RuleSuite(
    ESLintRule.TypeScriptNoEmptyInterface,
    [
        {
            Description: "Checking whether empty interfaces and types are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "interface Test { }",
                        "type Test = { }"
                    ]
                }
            ]
        }
    ]);
