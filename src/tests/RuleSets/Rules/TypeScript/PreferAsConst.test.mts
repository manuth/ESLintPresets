import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptPreferAsConst `TypeScriptPreferAsConst`} rule.
 */
export let PreferAsConst = new RuleSuite(
    ESLintRule.TypeScriptPreferAsConst,
    [
        {
            Description: "Checking whether `as const` is suggested…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'let foo: "foo" = "foo";'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'let foo = "foo" as const;'
                    ]
                }
            ]
        }
    ]);
