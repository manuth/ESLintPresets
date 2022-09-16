import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoUndefInit `NoUndefInit`} rule.
 */
export let NoUndefInit = new RuleSuite(
    ESLintRule.NoUndefInit,
    [
        {
            Description: `Checking whether initializations to \`${undefined}\` are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = undefined;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x;",
                        "const x = undefined;"
                    ]
                }
            ]
        }
    ]);
