import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoConstructorReturn `NoConstructorReturn`} rule.
 */
export let NoConstructorReturn = new RuleSuite(
    ESLintRule.NoConstructorReturn,
    [
        {
            Description: "Checking whether `return`-statements in constructors are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test {
                                constructor() {
                                    return TestFactory.Create();
                                }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            Class Test {
                                constructor() { }
                            }`
                    ]
                }
            ]
        }
    ]);
