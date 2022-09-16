import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
