import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.DotNotation `DotNotation`} rule.
 */
export let DotNotation = new RuleSuite(
    ESLintRule.DotNotation,
    [
        {
            Description: `Checking whether \`${ESLintRule.DotNotation}\`-rule is disabled…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        'test["hello"];',
                        "test.hello",
                        `
                            let key = "hello";
                            test[key];`
                    ]
                }
            ]
        }
    ]);
