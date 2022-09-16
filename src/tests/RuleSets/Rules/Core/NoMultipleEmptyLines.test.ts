import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
