import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoNewWrappers `NoNewWrappers`} rule.
 */
export let NoNewWrappers = new RuleSuite(
    ESLintRule.NoNewWrappers,
    [
        {
            Description: `Checking whether initializing new objects of classes for literals such as \`${Boolean.name}\` are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test = new String('hello world');"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let test = 'hello world';"
                    ]
                }
            ]
        }
    ]);
