import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
