import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoNewWrappers `NoNewWrappers`} rule.
 */
export let NoNewWrappers = new RuleSuite(
    ESLintRule.NoNewWrappers,
    [
        {
            Description: `Checking whether initializing new objects of classes for literals such as \`${nameof(Boolean)}\` are disallowed…`,
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
