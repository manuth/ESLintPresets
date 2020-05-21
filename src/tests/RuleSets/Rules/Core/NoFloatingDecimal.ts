import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoFloatingDecimal = new RuleSuite(
    "no-floating-decimal",
    [
        {
            Description: "Checking whether decimal points without a leading number or zero are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        ".2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "0.2;"
                    ]
                }
            ]
        }
    ]);
