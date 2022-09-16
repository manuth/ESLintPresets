import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
