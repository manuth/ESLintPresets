import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoShadow = new RuleSuite(
    "no-shadow",
    [
        {
            Description: "Checking whether shadowed variables are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test;
                            
                            function ()
                            {
                                let test;
                            }`
                    ]
                }
            ]
        }
    ]);
