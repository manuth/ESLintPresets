import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoImplicitCoercion `NoImplicitCoercion`} rule.
 */
export let NoImplicitCoercion = new RuleSuite(
    ESLintRule.NoImplicitCoercion,
    [
        {
            Description: "Checking whether shorthand type-conversion is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "!!test",
                        '""+test'
                    ]
                }
            ]
        }
    ]);
