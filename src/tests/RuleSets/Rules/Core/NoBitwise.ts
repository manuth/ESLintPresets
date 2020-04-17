import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoBitwise = new RuleSuite(
    "no-bitwise",
    [
        {
            Description: "Checking whether bitwise operators are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "console.log(1 || 2)"
                    ]
                }
            ]
        }
    ]);
