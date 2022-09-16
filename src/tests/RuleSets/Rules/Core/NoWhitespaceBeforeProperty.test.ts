import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoWhitespaceBeforeProperty `NoWhitespaceBeforeProperty`} rule.
 */
export let NoWhitespaceBeforeProperty = new RuleSuite(
    ESLintRule.NoWhitespaceBeforeProperty,
    [
        {
            Description: "Checking whether white-spaces in property-paths are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'x ["test"]',
                        "x. test",
                        "x .test",
                        "x .test()"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'x["test"]',
                        "x.test",
                        "x.test()"
                    ]
                }
            ]
        }
    ]);
