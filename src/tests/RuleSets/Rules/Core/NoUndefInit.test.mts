import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
