import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
