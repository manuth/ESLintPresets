import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ObjectCurlyNewLine = new RuleSuite(
    "object-curly-newline",
    [
        {
            Description: "Checking whether new-lines in after curly braces must be consistent…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = { a: 1, b: 2,
                                c: 3
                            };`,
                        `
                            let x = {
                                a: 1, b: 2, c: 3 }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: 1, b: 2, c: 3 };",
                        `
                            let x = {
                                a: 1, b: 2, c: 3
                            }`
                    ]
                }
            ]
        }
    ]);
