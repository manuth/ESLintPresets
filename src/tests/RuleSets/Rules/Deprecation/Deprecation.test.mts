import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.Deprecation `Deprecation`} rule.
 */
export let Deprecation = new RuleSuite(
    ESLintRule.Deprecation,
    [
        {
            Description: "Checking whether the usage of deprecated methods are prohibited…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @deprecated
                             */
                            function Test()
                            { }

                            Test();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function Test()
                            { }

                            Test();`,
                        `
                            /**
                             * @deprecated
                             */
                            function Test()
                            { }`
                    ]
                }
            ]
        }
    ]);
