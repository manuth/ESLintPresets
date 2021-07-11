import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.NoCaller `NoCaller`} rule.
 */
export let NoCaller = new RuleSuite(
    ESLintRule.NoCaller,
    [
        {
            Description: "Checking whether the use of `arguments.caller` is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test() {
                                console.log(arguments.caller);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test() { }"
                    ]
                }
            ]
        }
    ]);
