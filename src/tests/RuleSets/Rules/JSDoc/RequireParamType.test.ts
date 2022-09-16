import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocRequireParamType `JSDocRequireParamType`} rule.
 */
export let RequireParamType = new RuleSuite(
    ESLintRule.JSDocRequireParamType,
    [
        {
            Description: "Checking whether parameter-types in jsdoc-comments are required in javascript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string} test
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether parameter-types in jsdoc-comments aren't required in typescript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */`
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
                        `
                            /**
                             * @param test
                             */`
                    ]
                }
            ]
        }
    ]);
