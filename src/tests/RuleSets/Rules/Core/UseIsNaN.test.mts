import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.UseIsNaN `UseIsNaN`} rule.
 */
export let UseIsNaN = new RuleSuite(
    ESLintRule.UseIsNaN,
    [
        {
            Description: `Checking whether \`${NaN}\`-equations are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (test == NaN) { }",
                        "if (test === NaN) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (isNaN(test)) { }`
                    ]
                }
            ]
        }
    ]);
