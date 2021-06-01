import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let RequireDescription = new RuleSuite(
    "jsdoc/require-description",
    [
        {
            Description: "Checking whether descriptions are required where appropriate…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * 
                             */
                            let test = () => { };`,
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
                            class Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                Method() { }
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                set Test(value) { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let test;",
                        "let test = () => { };",
                        `
                            /**
                             * Test.
                             */
                            let test = () => { };`,
                        "function test() { }",
                        `
                            /**
                             * Test.
                             */
                            function test() { }`,
                        "class Test  { }",
                        `
                            /**
                             * Test.
                             */
                            class Test { }`,
                        `
                            class Test {
                                test;
                            }`,
                        `
                            class Test {
                                /**
                                 * Test.
                                 */
                                test;
                            }`,
                        `
                            class Test {
                                Method() { }
                            }`,
                        `
                            class Test {
                                /**
                                 * Test.
                                 */
                                Method() { }
                            }`,
                        `
                            class Test {
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            class Test {
                                /**
                                 * Test.
                                 */
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
                            class Test {
                                set Test(value) { }
                            }`,
                        `
                            class Test {
                                /**
                                 * Test.
                                 */
                                set Test(value) { }
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether descriptions are required where appropriate in typescript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            enum Test { }`,
                        `
                            enum TestEnum {
                                /**
                                 *
                                 */
                                Test
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                abstract Method();
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                Method();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test { }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
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
                            type Test = {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                (a, b);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "enum Test { }",
                        `
                            /**
                             * Test.
                             */
                            enum Test { }`,
                        `
                            enum TestEnum {
                                Test
                            }`,
                        `
                            enum TestEnum {
                                /**
                                 * Test.
                                 */
                                Test
                            }`,
                        `
                            class Test {
                                abstract Method();
                            }`,
                        `
                            class Test {
                                /**
                                 * Test.
                                 */
                                abstract Method();
                            }`,
                        `
                            declare class Test {
                                test;
                            }`,
                        `
                            declare class Test {
                                /**
                                 * Test.
                                 */
                                test;
                            }`,
                        "interface Test { }",
                        `
                            /**
                             * Test.
                             */
                            interface Test { }`,
                        `
                            interface Test {
                                test;
                            }`,
                        `
                            interface Test {
                                /**
                                 * Test.
                                 */
                                test;
                            }`,
                        `
                            interface Test {
                                TestMethod();
                            }`,
                        `
                            interface Test {
                                /**
                                 * Test.
                                 */
                                TestMethod();
                            }`,
                        `
                            interface Test {
                                new();
                            }`,
                        `
                            interface Test {
                                /**
                                 * Test.
                                 */
                                new();
                            }`,
                        `
                            interface Test {
                                constructor();
                            }`,
                        `
                            interface Test {
                                /**
                                 * Test.
                                 */
                                constructor();
                            }`,
                        `
                            interface Test {
                                (a, b);
                            }`,
                        `
                            interface Test {
                                /**
                                 * Test.
                                 */
                                (a, b);
                            }`,
                        "type Test = { }",
                        `
                            /**
                             * Test.
                             */
                            type Test = { }`,
                        `
                            type Test = {
                                test;
                            }`,
                        `
                            type Test = {
                                /**
                                 * Test.
                                 */
                                test;
                            }`,
                        `
                            type Test = {
                                TestMethod();
                            }`,
                        `
                            type Test = {
                                /**
                                 * Test.
                                 */
                                TestMethod();
                            }`,
                        `
                            type Test = {
                                new();
                            }`,
                        `
                            type Test = {
                                /**
                                 * Test.
                                 */
                                new();
                            }`,
                        `
                            type Test = {
                                constructor();
                            }`,
                        `
                            type Test = {
                                /**
                                 * Test.
                                 */
                                constructor();
                            }`,
                        `
                            type Test = {
                                (a, b);
                            }`,
                        `
                            type Test = {
                                /**
                                 * Test.
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
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * 
                             */
                            let test = () => { };`,
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
                            class Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                Method() { }
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                get Test() {
                                    return 1;
                                }
                            }`,
                        `
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
            Description: "Checking whether the rule is disabled for typescript-specific objects, too…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             *
                             */
                            enum Test { }`,
                        `
                            enum TestEnum {
                                /**
                                 *
                                 */
                                Test
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                abstract Method();
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                Method();
                            }`,
                        `
                            /**
                             *
                             */
                            interface Test { }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            interface Test {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
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
                            type Test = {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                TestMethod();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                new();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                constructor();
                            }`,
                        `
                            type Test = {
                                /**
                                 *
                                 */
                                (a, b);
                            }`
                    ]
                }
            ]
        }
    ]);
