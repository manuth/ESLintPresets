import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUselessCatch = new RuleSuite(
    "no-useless-catch",
    [
        {
            Description: "Checking whether useless catch-expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            try { }
                            catch(e)
                            {
                                throw e;
                            }`
                    ]
                }
            ]
        }
    ]);
