import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.PaddedBlocks `PaddedBlocks`} rule.
 */
export let PaddedBlocks = new RuleSuite(
    ESLintRule.PaddedBlocks,
    [
        {
            Description: "Checking whether blocks may not be padded…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (test)
                            {

                                console.log();

                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (test)
                            {
                                console.log();
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (test)
                            {

                                console.log();

                            }`
                    ]
                }
            ]
        }
    ]);
