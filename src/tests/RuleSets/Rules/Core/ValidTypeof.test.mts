import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
