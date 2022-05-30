import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptTripleSlashReference `TypeScriptTripleSlashReference`} rule.
 */
export let TripleSlashReference = new RuleSuite(
    ESLintRule.TypeScriptTripleSlashReference,
    [
        {
            Description: "Checking whether tripple-slash-references are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        '/// <reference path="./lib/test.d.ts" />'
                    ]
                }
            ]
        }
    ]);
