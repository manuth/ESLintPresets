import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.EQEQEQ `EQEQEQ`} rule.
 */
export let EQEQEQ = new RuleSuite(
    ESLintRule.EQEQEQ,
    [
        {
            Description: "Checking whether tripple equal signs are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (1 == 2) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "if (1 === 2) { }"
                    ]
                }
            ]
        }
    ]);
