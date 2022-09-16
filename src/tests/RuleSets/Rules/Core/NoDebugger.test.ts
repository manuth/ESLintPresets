import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoDebugger `NoDebugger`} rule.
 */
export let NoDebugger = new RuleSuite(
    ESLintRule.NoDebugger,
    [
        {
            Description: "Checking whether the `debugger`-keyword is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "debugger;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "console.log();"
                    ]
                }
            ]
        }
    ]);
