import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoFloatingPromises `TypeScriptNoFloatingPromises`} rule.
 */
export let NoFloatingPromises = new RuleSuite(
    ESLintRule.TypeScriptNoFloatingPromises,
    [
        {
            Description: "Checking whether floating promises are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                return new Promise(() => { });
                            }

                            test();`
                    ]
                }
            ]
        }
    ]);
