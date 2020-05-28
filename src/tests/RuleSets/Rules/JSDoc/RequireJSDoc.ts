import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let RequireJSDoc = new RuleSuite(
    "jsdoc/require-jsdoc",
    [
        {
            Description: "Checking whether jsdocs are required where appropriate…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test = () => { };",
                        "function test() { }",
                        "class Test  { }",
                        `
                            /**
                             *
                             */
                            class Test {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                Method() { }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                set Test(value) { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            let test = () => { };`,
                        "test = (arg1, arg2) => 10;",
                        `
                            /**
                             *
                             */
                            function test() { }`,
                        `
                            /**
                             *
                             */
                            class Test { }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                /**
                                 *
                                 */
                                Method() { }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                /**
                                 *
                                 */
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                /**
                                 *
                                 */
                                set Test(value) { }
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether jsdocs are required where appropriate in typescript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test: (arg1: string, arg2: string) => number;",
                        "enum Test { }",
                        `
                            /**
                             *
                             */
                            enum TestEnum {
                                Test
                            }`,
                        `
                            class Test {
                                abstract Method();
                            }`,
                        "interface Test { }",
                        `
                            /**
                             *
                             */
                            interface Test {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                (a, b);
                            }`,
                        "type Test = { }",
                        `
                            /**
                             *
                             */
                            type Test = {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                (a, b);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let test: TestFunction = () => { };",
                        `
                            /**
                             * Test
                             */
                            let test: (arg1: string, arg2: string) => number;`,
                        `
                        /**
                         *
                         */
                        enum Test { }`,
                        `
                            /**
                             *
                             */
                            enum TestEnum {
                                /**
                                 *
                                 */
                                Test
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                /**
                                 *
                                 */
                                abstract Method();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test { }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                /**
                                 *
                                 */
                                (a, b);
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = { }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                /**
                                 *
                                 */
                                (a, b);
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let test = () => { };",
                        "function test() { }",
                        "class Test  { }",
                        `
                            /**
                             *
                             */
                            class Test {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                Method() { }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            /**
                             *
                             */
                            class Test {
                                set Test(value) { }
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for typescript-specific objects, too…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "enum Test { }",
                        `
                            /**
                             *
                             */
                            enum TestEnum {
                                Test
                            }`,
                        `
                            class Test {
                                abstract Method();
                            }`,
                        "interface Test { }",
                        `
                            /**
                             *
                             */
                            interface Test {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test {
                                (a, b);
                            }`,
                        "type Test = { }",
                        `
                            /**
                             *
                             */
                            type Test = {
                                test;
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                TestMethod();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                new();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                constructor();
                            }`,
                        `
                            /**
                             *
                             */
                            type Test = {
                                (a, b);
                            }`
                    ]
                }
            ]
        }
    ]);
