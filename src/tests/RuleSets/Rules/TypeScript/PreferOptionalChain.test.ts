import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
