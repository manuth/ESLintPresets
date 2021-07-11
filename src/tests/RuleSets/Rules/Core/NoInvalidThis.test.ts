import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
