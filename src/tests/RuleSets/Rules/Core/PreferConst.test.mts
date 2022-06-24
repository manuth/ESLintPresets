import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.PreferConst `PreferConst`} rule.
 */
export let PreferConst = new RuleSuite(
    ESLintRule.PreferConst,
    [
        {
            Description: "Checking whether the `const`-keyword is not preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = "";
                            console.log(test);`
                    ]
                }
            ]
        }
    ]);
