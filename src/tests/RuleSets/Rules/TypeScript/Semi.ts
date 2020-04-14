import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let Semi = new RuleSuite(
    "@typescript-eslint/semi",
    [
        {
            Description: "Checking whether semicolons at the end of expressions are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "test()"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "test();"
                    ]
                }
            ]
        }
    ]);
