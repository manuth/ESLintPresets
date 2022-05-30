import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocEmptyTags `JSDocEmptyTags`} rule.
 */
export let EmptyTags = new RuleSuite(
    ESLintRule.JSDocEmptyTags,
    [
        {
            Description: "Checking whether some specific tags need to be empty…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @inheritdoc test
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
