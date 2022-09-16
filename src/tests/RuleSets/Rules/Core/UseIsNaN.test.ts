import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
