import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let RequireParam = new RuleSuite(
    "jsdoc/require-param",
    [
        {
            Description: "Checking whether all parameters must have a `@param`-tag…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            let test = (a, b) => { };`,
                        `
                            /**
                             * @param a
                             */
                            let test = (a, b) => { };`,
                        `
                            /**
                             * @param b
                             */
                            let test = (a, b) => { };`
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
                            let test = (a, b) => { };`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is applicable to all sorts of functions…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            function test(id) { }`,
                        `
                            /**
                             *
                             */
                            let test = (id) => { };`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                TestMethod(id) { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param id
                             */
                            function test(id) { }`,
                        `
                            /**
                             * @param id
                             */
                            let test = (id) => { };`,
                        `
                            class Test {
                                /**
                                 * @param id
                                 */
                                TestMethod(id) { }
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether additional contexts in typescript are checked, too…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    /* ToDo Wait for this commit to close: [gajus/eslint-plugin-jsdoc#512](https://github.com/gajus/eslint-plugin-jsdoc/issues/512) */
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            declare function test(id);`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                TestMethod(id);
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                new(id);
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                constructor(id);
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                abstract TestMethod(id);
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                abstract TestMethod(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                TestMethod(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                new(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                constructor(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                (id);
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                TestMethod(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                new(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                constructor(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                (id);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param id
                             */
                            declare function test(id);`,
                        `
                            declare class Test {
                                /**
                                 * @param id
                                 */
                                TestMethod(id);
                            }`,
                        `
                            declare class Test {
                                /**
                                 * @param id
                                 */
                                new(id);
                            }`,
                        `
                            declare Test {
                                /**
                                 * @param id
                                 */
                                constructor(id);
                            }`,
                        `
                            declare Test {
                                /**
                                 * @param id
                                 */
                                (id);
                            }`,
                        `
                            declare class Test {
                                /**
                                 * @param id
                                 */
                                abstract TestMethod(id);
                            }`,
                        `
                            class Test {
                                /**
                                 * @param id
                                 */
                                abstract TestMethod(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 * @param id
                                 */
                                TestMethod(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 * @param id
                                 */
                                new(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 * @param id
                                 */
                                constructor(id);
                            }`,
                        `
                            interface Test {
                                /**
                                 * @param id
                                 */
                                (id);
                            }`,
                        `
                            type Test = {
                                /**
                                 * @param id
                                 */
                                TestMethod(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 * @param id
                                 */
                                new(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 * @param id
                                 */
                                constructor(id);
                            }`,
                        `
                            type Test = {
                                /**
                                 * @param id
                                 */
                                (id);
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether params are not required for setters…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                /**
                                 *
                                 */
                                set TestProperty(value) { }
                            }`
                    ]
                }
            ]
        }
    ]);
