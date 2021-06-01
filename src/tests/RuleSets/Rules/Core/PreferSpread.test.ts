import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferSpread = new RuleSuite(
    "prefer-spread",
    [
        {
            Description: "Checking whether array-spreading is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let args = [1, 2, 3, 4];
                            Math.max.apply(Math, args);`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let args = [1, 2, 3, 4];
                            Math.max(...args);`
                    ]
                }
            ]
        }
    ]);
