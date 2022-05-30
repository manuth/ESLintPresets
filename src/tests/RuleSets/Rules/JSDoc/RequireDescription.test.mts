import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocRequireDescription `JSDocRequireDescription`} rule.
 */
export let RequireDescription = new RuleSuite(
    ESLintRule.JSDocRequireDescription,
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
                            }`,
                        `
                            class Test {
                                /**
                                 *
                                 */
                                Method() { }
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
                            declare class Test {
                                /**
                                 *
                                 */
                                test;
                            }`,
                        `
                            abstract class Test {
                                /**
                                 *
                                 */
                                abstract test;
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                get Test();
                            }`,
                        `
                            abstract class Test {
                                /**
                                 *
                                 */
                                abstract get Test();
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                abstract set Test(value);
                            }`,
                        `
                            abstract class Test {
                                /**
                                 *
                                 */
                                abstract set Test(value);
                            }`,
                        `
                            declare class Test {
                                /**
                                 *
                                 */
                                Method();
                            }`,
                        `
                            abstract class Test {
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
                            declare class Test {
                                Method();
                            }`,
                        `
                            declare class Test {
                                /**
                                 * Test.
                                 */
                                Method();
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
                        `
                            abstract class Test {
                                abstract test;
                            }`,
                        `
                            abstract class Test {
                                /**
                                 * Test.
                                 */
                                abstract test;
                            }`,
                        `
                            declare class Test {
                                get Test();
                            }`,
                        `
                            declare class Test {
                                /**
                                 * Test.
                                 */
                                get Test();
                            }`,
                        `
                            abstract class Test {
                                abstract get Test();
                            }`,
                        `
                            abstract class Test {
                                /**
                                 * Test.
                                 */
                                abstract get Test();
                            }`,
                        `
                            declare class Test {
                                set Test(value);
                            }`,
                        `
                            declare class Test {
                                /**
                                 * Test.
                                 */
                                set Test(value);
                            }`,
                        `
                            abstract class Test {
                                abstract set Test(value);
                            }`,
                        `
                            abstract class Test {
                                /**
                                 * Test.
                                 */
                                abstract set Test(value);
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
