import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";
export let NoSequences = new RuleSuite(
    "no-sequences",
    [
        {
            Description: "Checking whether comma-sequence are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "a += 1, 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "a += 1;"
                    ]
                }
            ]
        }
    ]);
