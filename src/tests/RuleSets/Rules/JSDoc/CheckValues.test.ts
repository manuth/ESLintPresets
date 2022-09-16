import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
