import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
