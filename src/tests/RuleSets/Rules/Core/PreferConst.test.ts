import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
