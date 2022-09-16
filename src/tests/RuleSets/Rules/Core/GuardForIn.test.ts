import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.GuardForIn `GuardForIn`} rule.
 */
export let GuardForIn = new RuleSuite(
    ESLintRule.GuardForIn,
    [
        {
            Description: "Checking whether `for ... in`-loops do not have to be guarded…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            for (let key in {})
                            {
                                console.log(key);
                            }`
                    ]
                }
            ]
        }
    ]);
