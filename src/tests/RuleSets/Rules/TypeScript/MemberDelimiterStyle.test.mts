import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptMemberDelimiterStyle `TypeScriptMemberDelimiterStyle`} rule.
 */
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
