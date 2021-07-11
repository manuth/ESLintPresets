import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
