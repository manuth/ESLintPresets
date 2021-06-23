import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUseBeforeDefine = new RuleSuite(
    ESLintRule.TypeScriptNoUseBeforeDefine,
    [
        {
            Description: "Checking whether using variables before declaration is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                console.log(hello);
                            }

                            let hello = "world";

                            function test()
                            {
                                test2();
                            }

                            function test2()
                            {
                                let x = new TestClass();
                            }

                            class TestClass { }`
                    ]
                }
            ]
        }
    ]);
