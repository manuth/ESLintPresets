import { nameOf } from "ts-nameof-proxy";
import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptFuncCallSpacing `TypeScriptFuncCallSpacing`} rule.
 */
export let FuncCallSpacing = new RuleSuite(
    ESLintRule.TypeScriptFuncCallSpacing,
    [
        {
            Description: `Checking whether \`${nameOf(Function)}\`-calls must be spaced correctly…`,
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
