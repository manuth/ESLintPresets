import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
