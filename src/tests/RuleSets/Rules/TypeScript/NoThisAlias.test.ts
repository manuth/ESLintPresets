import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoThisAlias `TypeScriptNoThisAlias`} rule.
 */
export let NoThisAlias = new RuleSuite(
    ESLintRule.TypeScriptNoThisAlias,
    [
        {
            Description: `Checking whether the \`${ESLintRule.TypeScriptNoThisAlias}\` rule is disabled…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                public TestMethod()
                                {
                                    self = this;

                                    return function() {
                                        return self.Test;
                                    }
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
