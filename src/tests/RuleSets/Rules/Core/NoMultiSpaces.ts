import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoMultiSpaces = new RuleSuite(
    "no-multi-spaces",
    [
        {
            Description: "Checking whether multiple spaces in a row are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "console.log(  );"
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
