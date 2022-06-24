import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptAdjacentOverloadSignatures `TypeScriptAdjacentOverloadSignatures`} rule.
 */
export let AdjacentOverloadSignatures = new RuleSuite(
    ESLintRule.TypeScriptAdjacentOverloadSignatures,
    [
        {
            Description: "Checking whether the rule works as expected…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test1() { }
                            function test2() { }
                            function test1(id) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test1() { }
                            function test1(id) { }
                            function test2() { }`
                    ]
                }
            ]
        }
    ]);
