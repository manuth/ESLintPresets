import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoOctalEscape `NoOctalEscape`} rule.
 */
export let NoOctalEscape = new RuleSuite(
    ESLintRule.NoOctalEscape,
    [
        {
            Description: "Checking whether octal escape-sequences are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'console.log("Copyright \\251");'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'console.log("Copyright \\u00A9");',
                        'console.log("Copyright \\xA9");'
                    ]
                }
            ]
        }
    ]);
