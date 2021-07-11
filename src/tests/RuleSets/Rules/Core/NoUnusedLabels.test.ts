import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.NoUnusedLabels `NoUnusedLabels`} rule.
 */
export let NoUnusedLabels = new RuleSuite(
    ESLintRule.NoUnusedLabels,
    [
        {
            Description: "Checking whether unused labels are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            a:
                            console.log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            a:
                            break a;`
                    ]
                }
            ]
        }
    ]);
