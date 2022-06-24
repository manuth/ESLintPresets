import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoUnusedLabels `NoUnusedLabels`} rule.
 */
export let NoUnusedLabels = new RuleSuite(
    ESLintRule.NoUnusedLabels,
    [
        {
            Description: "Checking whether unused labels are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            a:
                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            a:
                            break a;`
                    ]
                }
            ]
        }
    ]);
