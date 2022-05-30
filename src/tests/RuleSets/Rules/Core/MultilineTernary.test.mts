import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.MultilineTernary `MultilineTernary`} rule.
 */
export let MultilineTernary = new RuleSuite(
    ESLintRule.MultilineTernary,
    [
        {
            Description: "Checking whether ternary operations either must be consistently multiline or consistently single-line…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            true ?
                            1 : 2;`,
                        `
                            true ? 1 :
                                2;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "true ? 1 : 2;",
                        `
                            true ?
                                1 :
                                2;`
                    ]
                }
            ]
        }
    ]);
