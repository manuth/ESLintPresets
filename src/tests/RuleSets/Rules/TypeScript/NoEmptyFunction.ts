import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmptyFunction = new RuleSuite(
    "@typescript-eslint/no-empty-function",
    [
        {
            Description: "Checking whether empty functions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "function() { }",
                        "let test = () => { }",
                        `
                            class TestClass
                            {
                                TestMethod() { }
                            }`
                    ]
                }
            ]
        }
    ]);
