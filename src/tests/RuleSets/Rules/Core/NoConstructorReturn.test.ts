import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
