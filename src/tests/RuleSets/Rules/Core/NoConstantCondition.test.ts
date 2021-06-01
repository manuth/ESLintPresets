import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoConstantCondition = new RuleSuite(
    "no-constant-condition",
    [
        {
            Description: "Checking whether constant conditions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (true) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = true;
                            if (test) { }`
                    ]
                }
            ]
        }
    ]);
