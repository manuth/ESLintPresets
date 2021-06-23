import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let Quotes = new RuleSuite(
    ESLintRule.TypeScriptQuotes,
    [
        {
            Description: "Checking whether strings must be written using doublequotes…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "'test';",
                        "`test`;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        '"test";'
                    ]
                }
            ]
        },
        {
            Description: "Checking whether other quotes are allowed if the string contains a doublequote…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        '\'he said "this is a test!".\''
                    ]
                }
            ]
        },
        {
            Description: "Checking whether backticks are allowed if the string contains template-expressions…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "`${hello} world`"
                    ]
                }
            ]
        }
    ]);
