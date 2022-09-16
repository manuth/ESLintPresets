import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.JSDocRequireParamDescription `JSDocRequireParamDescription`} rule.
 */
export let RequireParamDescription = new RuleSuite(
    ESLintRule.JSDocRequireParamDescription,
    [
        {
            Description: "Checking whether descriptions are required in `@param`-tags…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param
                             * This is a test.
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
                             * @param
                             */`
                    ]
                }
            ]
        }
    ]);
