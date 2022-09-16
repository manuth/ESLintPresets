import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
