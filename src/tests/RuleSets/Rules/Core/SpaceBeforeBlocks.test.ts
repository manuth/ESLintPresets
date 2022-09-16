import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.SpaceBeforeBlocks `SpaceBeforeBlocks`} rule.
 */
export let SpaceBeforeBlocks = new RuleSuite(
    ESLintRule.SpaceBeforeBlocks,
    [
        {
            Description: "Checking whether spaces before blocks are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (test){ }",
                        "for (let i = 0; i < 10; i++){ }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "if (test) { }",
                        "for (let i = 0; i < 10; i++) { }"
                    ]
                }
            ]
        }
    ]);
