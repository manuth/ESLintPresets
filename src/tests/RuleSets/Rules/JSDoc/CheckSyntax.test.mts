import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckSyntax `JSDocCheckSyntax`} rule.
 */
export let CheckSyntax = new RuleSuite(
    ESLintRule.JSDocCheckSyntax,
    [
        {
            Description: "Checking whether syntax-errors cause rule-failures…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param {string=} a
                             */
                            function test(a) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string} a
                             */
                            function test(a) { }`
                    ]
                }
            ]
        },
        {
            Description: `Checking whether the \`${ESLintRule.JSDocCheckSyntax}\` rule is disabled for the weak rule-set…`,
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string=} a
                             */
                            function test(a) { }`
                    ]
                }
            ]
        }
    ]);
