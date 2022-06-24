import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptPreferOptionalChain `TypeScriptPreferOptionalChain`} rule.
 */
export let PreferOptionalChain = new RuleSuite(
    ESLintRule.TypeScriptPreferOptionalChain,
    [
        {
            Description: "Checking whether optional chains are preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'foo && foo["a"] && foo["a"].b && foo["a"].b.c;'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'foo?.["a"]?.b?.c;'
                    ]
                }
            ]
        }
    ]);
