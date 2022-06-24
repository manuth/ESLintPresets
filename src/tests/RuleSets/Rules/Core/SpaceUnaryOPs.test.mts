import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
