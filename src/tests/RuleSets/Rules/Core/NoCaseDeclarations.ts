import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoCaseDeclarations = new RuleSuite(
    "no-case-declarations",
    [
        {
            Description: "Checking whether declarations in switch-case expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            switch (test)
                            {
                                case 1:
                                    let test2 = "hello";
                                    break;
                            }`
                    ]
                }
            ]
        }
    ]);
