import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
