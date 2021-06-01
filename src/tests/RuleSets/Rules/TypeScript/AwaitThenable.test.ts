import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let AwaitThenable = new RuleSuite(
    "@typescript-eslint/await-thenable",
    [
        {
            Description: "Checking whether only thenable variables can be awaited…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let test = 2;
                            await test;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = new Promise((resolve) => setTimeout(resolve, 0));
                            await test;`
                    ]
                }
            ]
        }
    ]);
