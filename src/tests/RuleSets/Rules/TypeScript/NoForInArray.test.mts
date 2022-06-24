import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoForInArray `TypeScriptNoForInArray`} rule.
 */
export let NoForInArray = new RuleSuite(
    ESLintRule.TypeScriptNoForInArray,
    [
        {
            Description: "Checking whether iterating through an array using `for ... in` is disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "for (let i in []) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "for (let i of []) { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the usage of `for ... in` is allowed if the indexer is being used…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            for (let in in [])
                            {
                                console.log(i);
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "for (let i in []) { }"
                    ]
                }
            ]
        }
    ]);
