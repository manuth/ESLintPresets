import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoReturnAwait `NoReturnAwait`} rule.
 */
export let NoReturnAwait = new RuleSuite(
    ESLintRule.NoReturnAwait,
    [
        {
            Description: "Checking whether `return await`-expressions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            async function test()
                            {
                                return await doSlowAction();
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            async function test()
                            {
                                return doSlowAction();
                            }`
                    ]
                }
            ]
        }
    ]);
