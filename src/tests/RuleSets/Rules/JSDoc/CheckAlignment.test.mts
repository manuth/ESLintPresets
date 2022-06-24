import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckAlignment `JSDocCheckAlignment`} rule.
 */
export let CheckAlignment = new RuleSuite(
    ESLintRule.JSDocCheckAlignment,
    [
        {
            Description: "Checking whether the alignment is enforced correctly…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                            *
                             */`,
                        `
                            /**
                              *
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             *
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the alignment is ignored for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                            *
                             */`
                    ]
                }
            ]
        }
    ]);
