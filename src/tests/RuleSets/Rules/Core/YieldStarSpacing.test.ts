import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.YieldStarSpacing `YieldStarSpacing`} rule.
 */
export let YieldStarSpacing = new RuleSuite(
    ESLintRule.YieldStarSpacing,
    [
        {
            Description: "Checking whether yield-operators must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function *test()
                            {
                                yield * 1;
                            }`,
                        `
                            function *test()
                            {
                                yield *1;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function *test()
                            {
                                yield* 1;
                            }`
                    ]
                }
            ]
        }
    ]);
