import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
