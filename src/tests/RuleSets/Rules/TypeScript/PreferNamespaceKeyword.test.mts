import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptPreferNamespaceKeyword `TypeScriptPreferNamespaceKeyword`} rule.
 */
export let PreferNamespaceKeyword = new RuleSuite(
    ESLintRule.TypeScriptPreferNamespaceKeyword,
    [
        {
            Description: "Checking whether the namespace-keyword is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.DTS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "declare module Test { }"
                    ]
                }
            ]
        }
    ]);
