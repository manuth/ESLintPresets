import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmpty = new RuleSuite(
    "no-empty",
    [
        {
            Description: "Checking whether empty code-blocks are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "if (true) { }",
                        `
                            try
                            {
                                stuff();
                            }
                            catch { }`
                    ]
                }
            ]
        }
    ]);
