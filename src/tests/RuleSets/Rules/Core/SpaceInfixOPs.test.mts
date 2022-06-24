import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.SpaceInfixOPs `SpaceInfixOPs`} rule.
 */
export let SpaceInfixOPs = new RuleSuite(
    ESLintRule.SpaceInfixOPs,
    [
        {
            Description: "Checking whether spacing around operators must be present…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = 1+2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 1 + 2;"
                    ]
                }
            ]
        }
    ]);
