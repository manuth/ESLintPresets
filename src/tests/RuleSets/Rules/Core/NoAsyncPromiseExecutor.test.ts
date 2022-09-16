import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoAsyncPromiseExecutor `NoAsyncPromiseExecutor`} rule.
 */
export let NoAsyncPromiseExecutor = new RuleSuite(
    ESLintRule.NoAsyncPromiseExecutor,
    [
        {
            Description: "Checking whether async promise-executors are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = new Promise(async (resolve, reject) => { });"
                    ]
                }
            ]
        }
    ]);
