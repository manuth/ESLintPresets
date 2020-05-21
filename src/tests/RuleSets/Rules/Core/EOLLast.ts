import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let EOLLast = new RuleSuite(
    "eol-last",
    [
        {
            Description: "Checking whether files must have a new-line character at the end…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "console.log();"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "console.log();\n"
                    ]
                }
            ]
        }
    ]);
