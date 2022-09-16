import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoDuplicateCase `NoDuplicateCase`} rule.
 */
export let NoDuplicateCase = new RuleSuite(
    ESLintRule.NoDuplicateCase,
    [
        {
            Description: "Checking whether duplicate cases are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            switch (0)
                            {
                                case 1:
                                    break;
                                case 1:
                                case 2:
                                    break;
                                default:
                                case 3:
                                    break;
                            }`,
                        `
                            switch (0)
                            {
                                case 1:
                                    break;
                                case 1:
                                    break;
                                case 2:
                                    break;
                                default:
                                case 3:
                                    break;
                            }`
                    ]
                }
            ]
        }
    ]);
