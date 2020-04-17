import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUndefInit = new RuleSuite(
    "no-undef-init",
    [
        {
            Description: "Checking whether initializeations to `undefined` are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = undefined;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x;",
                        "const x = undefined;"
                    ]
                }
            ]
        }
    ]);
