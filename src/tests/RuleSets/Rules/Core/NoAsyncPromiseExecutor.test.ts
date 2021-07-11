import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
