import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
