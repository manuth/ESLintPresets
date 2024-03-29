import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocRequireReturns `JSDocRequireReturns`} rule.
 */
export let RequireReturns = new RuleSuite(
    ESLintRule.JSDocRequireReturns,
    [
        {
            Description: "Checking whether returns are required if a `return`-statement is present in the block…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            let test = () => {
                                return 1;
                            }`,
                        `
                            /**
                             *
                             */
                            function test() {
                                return 1;
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                Method() {
                                    return 1;
                                }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @returns
                             */
                            let test = () => {
                                return 1;
                            }`,
                        `
                            /**
                             * @returns
                             */
                            function test() {
                                return 1;
                            }`,
                        `
                            class Test {
                                /**
                                 * @returns
                                 */
                                Method() {
                                    return 1;
                                }
                            }`,
                        `
                            class Test {
                                /**
                                 * @returns
                                 */
                                get Test() {
                                    return 1;
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
