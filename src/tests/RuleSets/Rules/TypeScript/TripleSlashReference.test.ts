import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
