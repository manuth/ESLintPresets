import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
