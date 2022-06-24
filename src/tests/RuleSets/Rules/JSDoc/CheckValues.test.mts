import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.JSDocCheckValues `JSDocCheckValues`} rule.
 */
export let CheckValues = new RuleSuite(
    ESLintRule.JSDocCheckValues,
    [
        {
            Description: "Checking whether specific tags are checked for their values…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @version test
                             */`,
                        `
                            /**
                             * @since test
                             */`,
                        `
                            /**
                             * @author
                             */`,
                        `
                            /**
                             * @license inexistent license
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @version 1.0.0
                             */`,
                        `
                            /**
                             * @since 1.0.0
                             */`,
                        `
                            /**
                             * @author Me
                             */`,
                        `
                            /**
                             * @license MIT
                             */`
                    ]
                }
            ]
        }
    ]);
