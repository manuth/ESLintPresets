import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUnusedVars = new RuleSuite(
    "@typescript-eslint/no-unused-vars",
    [
        {
            Description: "Checking whether unused variables cause an error…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test;
                            console.log(test);`
                    ]
                }
            ]
        }
    ]);
