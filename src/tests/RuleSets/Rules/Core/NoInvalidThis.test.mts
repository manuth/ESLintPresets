import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoInvalidThis `NoInvalidThis`} rule.
 */
export let NoInvalidThis = new RuleSuite(
    ESLintRule.NoInvalidThis,
    [
        {
            Description: "Checking whether the usage of the global `this`-object is allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "this;"
                    ]
                }
            ]
        }
    ]);
