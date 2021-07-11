import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
