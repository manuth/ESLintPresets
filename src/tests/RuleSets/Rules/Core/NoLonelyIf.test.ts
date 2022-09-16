import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoLonelyIf `NoLonelyIf`} rule.
 */
export let NoLonelyIf = new RuleSuite(
    ESLintRule.NoLonelyIf,
    [
        {
            Description: "Checking whether expressions that could be converted to an `else if` cause a failure…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (test) { }
                            else
                            {
                                if (test2)
                                { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (test) { }
                            else if (test2) { }`
                    ]
                }
            ]
        }
    ]);
