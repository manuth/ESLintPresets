import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmptyPattern = new RuleSuite(
    "no-empty-pattern",
    [
        {
            Description: "Checking whether empty patterns are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: {} };"
                    ]
                }
            ]
        }
    ]);
