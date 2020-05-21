import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoVoid = new RuleSuite(
    "no-void",
    [
        {
            Description: "Checking whether the `void` keyword is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "void test;",
                        `
                            function Test()
                            {
                                return void 0;
                            }`
                    ]
                }
            ]
        }
    ]);
