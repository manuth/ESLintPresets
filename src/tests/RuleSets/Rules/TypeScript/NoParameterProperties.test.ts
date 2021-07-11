import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoParameterProperties `TypeScriptNoParameterProperties`} rule.
 */
export let NoParameterProperties = new RuleSuite(
    ESLintRule.TypeScriptNoParameterProperties,
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
