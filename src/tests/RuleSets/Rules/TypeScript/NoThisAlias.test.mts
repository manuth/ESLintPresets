import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
