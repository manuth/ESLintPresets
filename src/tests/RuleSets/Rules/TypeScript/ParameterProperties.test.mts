import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptParameterProperties `TypeScriptParameterProperties`} rule.
 */
export let ParameterProperties = new RuleSuite(
    ESLintRule.TypeScriptParameterProperties,
    [
        {
            Description: "Checking whether parameter-properties are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test
                            {
                                constructor(public test) { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                public test;

                                constructor(test)
                                {
                                    this.test = test;
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
