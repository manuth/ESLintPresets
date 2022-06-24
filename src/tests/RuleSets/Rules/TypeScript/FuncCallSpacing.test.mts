import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptFuncCallSpacing `TypeScriptFuncCallSpacing`} rule.
 */
export let FuncCallSpacing = new RuleSuite(
    ESLintRule.TypeScriptFuncCallSpacing,
    [
        {
            Description: `Checking whether \`${nameof(Function)}\`-calls must be spaced correctly…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test() { }
                            test ();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test() { }
                            test();`
                    ]
                }
            ]
        }
    ]);
