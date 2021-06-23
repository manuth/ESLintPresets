import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmptyFunction = new RuleSuite(
    ESLintRule.TypeScriptNoEmptyFunction,
    [
        {
            Description: "Checking whether empty functions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
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
