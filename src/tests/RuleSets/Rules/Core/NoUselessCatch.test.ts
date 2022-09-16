import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
