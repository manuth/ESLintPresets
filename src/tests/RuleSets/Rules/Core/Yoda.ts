import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let Yoda = new RuleSuite(
    "yoda",
    [
        {
            Description: "Checking whether comparsions must look correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'if ("red" === color) { }'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'if (color === "red") { }'
                    ]
                }
            ]
        }
    ]);
