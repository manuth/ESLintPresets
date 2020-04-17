import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoControlRegex = new RuleSuite(
    "no-control-regex",
    [
        {
            Description: "Checking whether control-characters in regular expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "/\\0x1f/"
                    ]
                }
            ]
        }
    ]);
