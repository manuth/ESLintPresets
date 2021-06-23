import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
