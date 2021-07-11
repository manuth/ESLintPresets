import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoExplicitAny `TypeScriptNoExplicitAny`} rule.
 */
export let NoExplicitAny = new RuleSuite(
    ESLintRule.TypeScriptNoExplicitAny,
    [
        {
            Description: "Checking whether explicit `any` assertions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x: any;",
                        "let x: any[];",
                        "let x: Map<string, any>;"
                    ]
                }
            ]
        }
    ]);
