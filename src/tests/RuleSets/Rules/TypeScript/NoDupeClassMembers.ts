import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDupeClassMembers = new RuleSuite(
    "@typescript-eslint/no-dupe-class-members",
    [
        {
            Description: "Checking whether duplicate class-members aren't allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test
                            {
                                static TestMethod() { };
                                static TestMethod() { };
                            }`,
                        `
                            class Test
                            {
                                TestMethod() { };
                                TestMethod() { };
                            }`,
                        `
                            class Test
                            {
                                get Test() { };
                                get Test() { };
                            }`,
                        `
                            class Test
                            {
                                set Test(value) { };
                                set Test(value) { };
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                static TestMethod() { };
                            }`,
                        `
                            class Test
                            {
                                TestMethod() { };
                            }`,
                        `
                            class Test
                            {
                                get Test() { };
                            }`,
                        `
                            class Test
                            {
                                set Test(value) { };
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether method-overloads are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                public TestMethod(id);
                                public TestMethod(id, value) { }
                            }`
                    ]
                }
            ]
        }
    ]);
