import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
