import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrayBracketNewLine = new RuleSuite(
    "array-bracket-newline",
    [
        {
            Description: "Checking whether consistent newlines are required between array-brackets…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                1,
                                2]`,
                        `
                            let x = [1,
                                2
                                ]`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = [1,2]",
                        `
                            let x = [1,
                                2]`,
                        `
                            let x = [
                                1,
                                2
                            ]`
                    ]
                }
            ]
        }
    ]);
