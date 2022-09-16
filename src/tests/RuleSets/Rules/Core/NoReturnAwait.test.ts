import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
