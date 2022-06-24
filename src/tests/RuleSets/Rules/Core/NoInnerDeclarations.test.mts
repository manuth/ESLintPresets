import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoInnerDeclarations `NoInnerDeclarations`} rule.
 */
export let NoInnerDeclarations = new RuleSuite(
    ESLintRule.NoInnerDeclarations,
    [
        {
            Description: "Checking whether inner function-declarations are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                function test2() { }
                            }`
                    ]
                }
            ]
        }
    ]);
