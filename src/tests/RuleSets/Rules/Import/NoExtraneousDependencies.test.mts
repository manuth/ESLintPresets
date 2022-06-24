import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { ExtraneousDependencySuite } from "./ExtraneousDependencySuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.ImportNoExtraneousDependencies `ImportNoExtraneousDependencies`} rule.
 */
export let NoExtraneousDependencies = new ExtraneousDependencySuite(
    ESLintRule.ImportNoExtraneousDependencies,
    [
        {
            Description: "Checking whether extraneous dependencies are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `import "${ExtraneousDependencySuite.ExtraneousDependency}"`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'import path = require("path");'
                    ]
                }
            ]
        }
    ]);
