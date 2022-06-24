import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.GeneratorStarSpacing `GeneratorStarSpacing`} rule.
 */
export let GeneratorStarSpacing = new RuleSuite(
    ESLintRule.GeneratorStarSpacing,
    [
        {
            Description: "Checking whether the expected star-spacing is forced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function*generator() { }",
                        "function *generator() { }",
                        "function * generator() { }",
                        "let x = function* () { }",
                        "let x = function * () { }",
                        "let x = function *() { }",
                        "class { static*generator() { } }",
                        "class { static* generator() { } }",
                        "class { static * generator() { } }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function* generator()",
                        "let x = function*()",
                        "class { static *generator() }"
                    ]
                }
            ]
        }
    ]);
