import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
