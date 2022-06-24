import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoMultipleEmptyLines `NoMultipleEmptyLines`} rule.
 */
export let NoMultipleEmptyLines = new RuleSuite(
    ESLintRule.NoMultipleEmptyLines,
    [
        {
            Description: "Checking whether multiple empty lines in a row are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            console.log();


                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            console.log();

                            console.log();`
                    ]
                }
            ]
        }
    ]);
