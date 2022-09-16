import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
