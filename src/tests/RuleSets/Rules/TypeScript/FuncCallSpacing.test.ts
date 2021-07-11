import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
