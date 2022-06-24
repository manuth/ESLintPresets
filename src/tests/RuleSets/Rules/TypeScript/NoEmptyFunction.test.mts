import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoEmptyFunction `TypeScriptNoEmptyFunction`} rule.
 */
export let NoEmptyFunction = new RuleSuite(
    ESLintRule.TypeScriptNoEmptyFunction,
    [
        {
            Description: "Checking whether empty functions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "function() { }",
                        "let test = () => { }",
                        `
                            class TestClass
                            {
                                TestMethod() { }
                            }`
                    ]
                }
            ]
        }
    ]);
