import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoEmpty `NoEmpty`} rule.
 */
export let NoEmpty = new RuleSuite(
    ESLintRule.NoEmpty,
    [
        {
            Description: "Checking whether empty code-blocks are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "if (true) { }",
                        `
                            try
                            {
                                stuff();
                            }
                            catch { }`
                    ]
                }
            ]
        }
    ]);
