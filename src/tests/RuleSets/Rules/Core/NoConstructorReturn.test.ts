import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
