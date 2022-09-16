import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.SpaceUnaryOPs `SpaceUnaryOPs`} rule.
 */
export let SpaceUnaryOPs = new RuleSuite(
    ESLintRule.SpaceUnaryOPs,
    [
        {
            Description: "Checking whether spacing of unary operators must be correct…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "delete(test);",
                        "++ test;",
                        "test ++;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "delete test;",
                        "++test;",
                        "test++;"
                    ]
                }
            ]
        }
    ]);
