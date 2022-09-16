import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoConstantCondition `NoConstantCondition`} rule.
 */
export let NoConstantCondition = new RuleSuite(
    ESLintRule.NoConstantCondition,
    [
        {
            Description: "Checking whether constant conditions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (true) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = true;
                            if (test) { }`
                    ]
                }
            ]
        }
    ]);
