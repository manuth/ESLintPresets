import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoUselessCatch `NoUselessCatch`} rule.
 */
export let NoUselessCatch = new RuleSuite(
    ESLintRule.NoUselessCatch,
    [
        {
            Description: "Checking whether useless catch-expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            try { }
                            catch(e)
                            {
                                throw e;
                            }`
                    ]
                }
            ]
        }
    ]);
