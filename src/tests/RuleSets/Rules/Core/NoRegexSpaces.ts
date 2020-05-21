import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoRegexSpaces = new RuleSuite(
    "NoRegexSpaces",
    [
        {
            Description: "Checking whether multiple spaces in regular expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "/   /g;"
                    ]
                }
            ]
        }
    ]);
