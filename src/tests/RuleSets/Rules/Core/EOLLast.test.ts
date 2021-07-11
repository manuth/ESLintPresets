import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.EOLLast `EOLLast`} rule.
 */
export let EOLLast = new RuleSuite(
    ESLintRule.EOLLast,
    [
        {
            Description: "Checking whether files must have a new-line character at the end…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "console.log();"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "console.log();\n"
                    ]
                }
            ]
        }
    ]);
