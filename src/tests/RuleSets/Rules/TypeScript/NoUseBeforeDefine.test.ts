import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoUseBeforeDefine `TypeScriptNoUseBeforeDefine`} rule.
 */
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
