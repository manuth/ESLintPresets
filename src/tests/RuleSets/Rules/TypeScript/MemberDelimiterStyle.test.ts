import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let MemberDelimiterStyle = new RuleSuite(
    ESLintRule.TypeScriptMemberDelimiterStyle,
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
