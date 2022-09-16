import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ImportNoDuplicates `ImportNoDuplicates`} rule.
 */
export let NoDuplicates = new RuleSuite(
    ESLintRule.ImportNoDuplicates,
    [
        {
            Description: "Checking whether duplicate imports are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import fs from "fs";
                            import { readFile } from "fs";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import fs, { readFile } from "fs";`
                    ]
                }
            ]
        }
    ]);
