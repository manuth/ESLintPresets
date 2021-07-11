import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
