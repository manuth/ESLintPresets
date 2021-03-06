import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
