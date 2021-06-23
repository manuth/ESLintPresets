import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
