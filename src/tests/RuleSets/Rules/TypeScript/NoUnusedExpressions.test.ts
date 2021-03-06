import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoUnusedExpressions `TypeScriptNoUnusedExpressions`} rule.
 */
export let NoUnusedExpressions = new RuleSuite(
    ESLintRule.TypeScriptNoUnusedExpressions,
    [
        {
            Description: "Checking whether unused expressions cause a warning…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "1;",
                        "test > 0.5 ? 0 : 1;",
                        "`test`"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "Math.random();",
                        "let test = 'test';",
                        "let test = Math.random() > 0.5 ? 0 : 1;",
                        "test > 0.5 ? test1() : test2();",
                        `
                            class A { }
                            new A();`,
                        "tag`test`"
                    ]
                }
            ]
        }
    ]);
