import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SemiSpacing = new RuleSuite(
    "semi-spacing",
    [
        {
            Description: "Checking whether semicolons must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let a = 1;let b = 2;",
                        "let a = 1 ;let b = 2;",
                        "let a = 1 ; let b = 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let a = 1; let b = 2;"
                    ]
                }
            ]
        }
    ]);
