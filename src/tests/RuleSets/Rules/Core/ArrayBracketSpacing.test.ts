import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ArrayBracketSpacing `ArrayBracketSpacing`} rule.
 */
export let ArrayBracketSpacing = new RuleSuite(
    ESLintRule.ArrayBracketSpacing,
    [
        {
            Description: "Checking whether array-brackets are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "[ 1,2 ]",
                        "[ 1,2]",
                        "[1,2 ]"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "[1, 2]",
                        "[1,2]"
                    ]
                }
            ]
        }
    ]);
