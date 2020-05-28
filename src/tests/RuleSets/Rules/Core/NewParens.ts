import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NewParens = new RuleSuite(
    "new-parens",
    [
        {
            Description: "Checking whether `new`-expressions without parentheses are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = new Map;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = new Map();"
                    ]
                }
            ]
        }
    ]);
