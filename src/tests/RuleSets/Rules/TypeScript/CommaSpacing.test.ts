import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CommaSpacing = new RuleSuite(
    ESLintRule.TypeScriptCommaSpacing,
    [
        {
            Description: "Checking whether commas need to be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test(a,b) { }",
                        "function test(a ,b) { }",
                        "function test(a , b) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(a, b) { }"
                    ]
                }
            ]
        }
    ]);
