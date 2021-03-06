import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.ValidTypeof `ValidTypeof`} rule.
 */
export let ValidTypeof = new RuleSuite(
    ESLintRule.ValidTypeof,
    [
        {
            Description: "Checking whether `typeof`-expressions must be compared to valid strings…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'if (typeof test === "sting") { }'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'if (typeof test === "string") { }'
                    ]
                }
            ]
        }
    ]);
