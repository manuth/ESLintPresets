import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ImportNewLineAfterImport `ImportNewLineAfterImport`} rule.
 */
export let NewLineAfterImport = new RuleSuite(
    ESLintRule.ImportNewLineAfterImport,
    [
        {
            Description: "Checking whether a new-line after require-statements is required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            const path = require("path");
                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            const path = require("path");

                            console.log();`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether a new-line after import-statements is required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import path = require("path");
                            console.log();`,
                        `
                            import { join } from "path";
                            console.log();`,
                        `
                            import chalk from "chalk";
                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import path = require("path");

                            console.log();`,
                        `
                            import { join } from "path";

                            console.log();`,
                        `
                            import chalk from "chalk";

                            console.log();`
                    ]
                }
            ]
        }
    ]);
