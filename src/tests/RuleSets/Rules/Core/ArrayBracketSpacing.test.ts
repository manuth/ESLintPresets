import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
