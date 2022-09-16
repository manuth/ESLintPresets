import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
