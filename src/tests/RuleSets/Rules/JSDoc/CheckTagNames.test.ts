import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
