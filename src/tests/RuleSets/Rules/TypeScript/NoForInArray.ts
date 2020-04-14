import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoForInArray = new RuleSuite(
    "@typescript-eslint/no-for-in-array",
    [
        {
            Description: "Checking whether iterating through an array using `for ... in` is disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "for (let i in []) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "for (let i of []) { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "for (let i in []) { }"
                    ]
                }
            ]
        }
    ]);
