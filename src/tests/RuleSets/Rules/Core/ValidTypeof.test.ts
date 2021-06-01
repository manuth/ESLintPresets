import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ValidTypeof = new RuleSuite(
    "valid-typeof",
    [
        {
            Description: "Checking whether `typeof`-expressions must be compared to valid strings…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'if (typeof test === "sting") { }'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'if (typeof test === "string") { }'
                    ]
                }
            ]
        }
    ]);
