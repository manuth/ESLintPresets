import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoLonelyIf = new RuleSuite(
    "no-lonely-if",
    [
        {
            Description: "Checking whether expressions that could be converted to an `else if` cause a failure…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (test) { }
                            else
                            {
                                if (test2)
                                { }
                            }`
                    ]
                }
            ]
        }
    ]);
