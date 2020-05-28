import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUseBeforeDefine = new RuleSuite(
    "@typescript-eslint/no-use-before-define",
    [
        {
            Description: "Checking whether using variables before declaration is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test()
                            {
                                console.log(hello);
                            }
                            
                            let hello = "world";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                test2();
                            }

                            let hello = "world";

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
