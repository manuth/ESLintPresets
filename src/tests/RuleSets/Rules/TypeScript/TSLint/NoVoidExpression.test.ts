import { TSLintRule } from "../../../../../TSLintRule";
import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite";

/**
 * Provides tests for the {@link TSLintRule.NoVoidExpression `NoVoidExpression`} rule.
 */
export let NoVoidExpression = new TSLintRuleSuite(
    TSLintRule.NoVoidExpression,
    [
        {
            Description: "Checking whether the correct usage of void-returning functions is enforced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function x() { }
                            console.log(x());`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function x() { }
                            x();`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether void-returning functions are allowed in shorthand arrow-functions…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function x() { }
                            let y = () => x();`
                    ]
                }
            ]
        }
    ]);
