import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let MemberDelimiterStyle = new RuleSuite(
    "@typescript-eslint/member-delimiter-style",
    [
        {
            Description: "Checking whether members must be delimited with semicolons…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "type Test = { a: any, }",
                        "type Test = { a: any; }",
                        "interface Test { a: any, }",
                        "interface Test { a: any; }",
                        `
                            type Test = {
                                a: any,
                                b: any
                            }`,
                        `
                            interface Test
                            {
                                a: any,
                                b: any
                            }`,
                        `
                            type Test = {
                                a: any;
                                b: any
                            }`,
                        `
                            interface Test
                            {
                                a: any;
                                b: any
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "type Test = { a: any }",
                        "type Test = { a: any, b: any }",
                        "interface Test { a: any }",
                        "interface Test { a: any, b: any }",
                        `
                            type Test = {
                                a: any;
                                b: any;
                            }`,
                        `
                            interface Test
                            {
                                a: any;
                                b: any;
                            }`
                    ]
                }
            ]
        }
    ]);
