import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckTagNames `JSDocCheckTagNames`} rule.
 */
export let CheckTagNames = new RuleSuite(
    ESLintRule.JSDocCheckTagNames,
    [
        {
            Description: "Checking whether invalid tag-names cause a failure…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @inexistentTag
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @inheritdoc
                             */`
                    ]
                }
            ]
        }
    ]);
