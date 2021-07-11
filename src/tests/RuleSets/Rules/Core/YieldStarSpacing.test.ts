import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
