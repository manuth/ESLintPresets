import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUnusedLabels = new RuleSuite(
    "no-unused-labels",
    [
        {
            Description: "Checking whether unused labels are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            a:
                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            a:
                            break a;`
                    ]
                }
            ]
        }
    ]);
