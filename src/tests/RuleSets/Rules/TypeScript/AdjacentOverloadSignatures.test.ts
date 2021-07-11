import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
