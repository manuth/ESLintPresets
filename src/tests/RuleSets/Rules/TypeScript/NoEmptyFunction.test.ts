import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
