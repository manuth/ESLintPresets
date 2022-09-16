import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckParamNames `JSDocCheckParamNames`} rule.
 */
export let CheckParamNames = new RuleSuite(
    ESLintRule.JSDocCheckParamNames,
    [
        {
            Description: "Checking whether the parameter names must be matching…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param b
                             * @param a
                             */
                            function test(a, b) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param a
                             * @param b
                             */
                            function test(a, b) { }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param b
                             * @param a
                             */
                            function test(a, b) { }`
                    ]
                }
            ]
        }
    ]);
