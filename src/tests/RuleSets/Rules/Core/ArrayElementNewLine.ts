import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrayElementNewLine = new RuleSuite(
    "array-element-newline",
    [
        {
            Description: "Checking whether new lines between array-elements are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                1, 2,
                                3];`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = [1, 2, 3];",
                        `
                            let x = [
                                1,
                                2,
                                3
                            ]`
                    ]
                }
            ]
        }
    ]);
