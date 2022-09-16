import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoConsole `NoConsole`} rule.
 */
export let NoConsole = new RuleSuite(
    ESLintRule.NoConsole,
    [
        {
            Description: "Checking whether console-calls are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "console.log();"
                    ]
                }
            ]
        }
    ]);
