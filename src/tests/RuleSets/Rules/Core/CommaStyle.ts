import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CommaStyle = new RuleSuite(
    "comma-style",
    [
        {
            Description: "Checking whether commas are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                a
                                ,b
                            ]`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = [
                                a,
                                b
                            ]`
                    ]
                }
            ]
        }
    ]);
