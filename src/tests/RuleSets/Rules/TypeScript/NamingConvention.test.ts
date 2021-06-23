import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NamingConvention = new RuleSuite(
    ESLintRule.TypeScriptNamingConvention,
    [
        {
            Description: "Checking whether enums must be written in pascal-case…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "enum test { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "enum Test { }",
                        "enum AnotherTest { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether enums don't have to follow a specific format…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "enum tEsT { }",
                        "enum Test { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether enum-members must be written in pascal-case…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            enum Test
                            {
                                tEsT
                            }`,
                        `
                            enum Test
                            {
                                test
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            enum Test
                            {
                                Test,
                                TestMember
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether enum-members don't have to follow a specific format…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            enum Test
                            {
                                thisIsATest,
                                tEsT,
                                Test
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether types must be written in pascal-case…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "type test = string;",
                        "type tEsT = string;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "type Test = string;",
                        "type AnotherTest = string;"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether types don't have to follow a specific format…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "type tEsT = string;",
                        "type thiSiSaTesT = string;"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether interfaces must start with a capitalized `I`…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "interface Test { }",
                        "interface iTest { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "interface ITest { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the name of an interface after the capitalized `I` has to be written in pascal-case…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "interface Itest { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "interface ITest { }",
                        "interface IAnotherTest { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether interfaces don't have to follow a specific format…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "interface iTeSt { }",
                        "interface ItEst { }",
                        "interface ITest { }",
                        "interface Test { }",
                        "interface test { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether type-parameters must start with a capitalized `T`…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "class List<t> { }",
                        "class List<test> { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "class List<T> { }",
                        "class Dictionary<TKey, TValue> { }",
                        "class Tuple<T0, T1, T2> { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the name of a type-parameter after the capitalized `T` has to be written in pascal-case…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "class List<Ttest> { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "class List<TTest> { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether type-parameters don't have to follow a specific format…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "class List<Ttest> { }",
                        "class List<TTest> { }",
                        "class List<test> { }",
                        "class List<Test> { }"
                    ]
                }
            ]
        }
    ]);
