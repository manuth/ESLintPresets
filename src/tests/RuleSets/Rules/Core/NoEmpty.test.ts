import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
