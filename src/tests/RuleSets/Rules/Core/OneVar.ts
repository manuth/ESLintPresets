import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let OneVar = new RuleSuite(
    "one-var",
    [
        {
            Description: "Checking whether multiple var-declarations in one statement are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let a, b = 2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let a;
                            let b = 2;`
                    ]
                }
            ]
        }
    ]);
