import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let MaxLen = new RuleSuite(
    "max-len",
    [
        {
            Description: "Checking whether lengths of lines aren't limited…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "test".repeat(1000)
                    ]
                }
            ]
        }
    ]);
