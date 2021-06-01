import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoVar = new RuleSuite(
    "no-var",
    [
        {
            Description: "Checking whether declaring `var`s is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "var x;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x;"
                    ]
                }
            ]
        }
    ]);
