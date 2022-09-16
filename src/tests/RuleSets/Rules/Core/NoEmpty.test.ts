import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
