import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let GuardForIn = new RuleSuite(
    "guard-for-in",
    [
        {
            Description: "Checking whether `for ... in`-loops do not have to be guarded…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            for (let key in {})
                            {
                                console.log(key);
                            }`
                    ]
                }
            ]
        }
    ]);
