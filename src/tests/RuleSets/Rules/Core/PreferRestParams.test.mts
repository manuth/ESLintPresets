import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.PreferRestParams `PreferRestParams`} rule.
 */
export let PreferRestParams = new RuleSuite(
    ESLintRule.PreferRestParams,
    [
        {
            Description: "Checking whether rest-parameters are preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test()
                            {
                                console.log(arguments);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test(...args)
                            {
                                console.log(args);
                            }`
                    ]
                }
            ]
        }
    ]);
