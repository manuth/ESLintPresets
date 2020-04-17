import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDebugger = new RuleSuite(
    "no-debugger",
    [
        {
            Description: "Checking whether the `debugger`-keyword is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "debugger;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "console.log();"
                    ]
                }
            ]
        }
    ]);
