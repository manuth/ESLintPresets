import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ObjectShorthand = new RuleSuite(
    ESLintRule.ObjectShorthand,
    [
        {
            Description: "Checking whether non-shorthand object declarations are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = { a: a };",
                        `
                            let x = {
                                test: function () { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a }",
                        `
                            let x = {
                                test() { }
                            }`
                    ]
                }
            ]
        }
    ]);
