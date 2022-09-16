import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoNamespace `TypeScriptNoNamespace`} rule.
 */
export let NoNamespace = new RuleSuite(
    ESLintRule.TypeScriptNoNamespace,
    [
        {
            Description: "Checking whether normal namespaces are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "namespace Test { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether namespace-declarations are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "declare namespace Test { }"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether namespace-declarations inside of `d.ts` files are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.DTS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "namespace Test { }",
                        "declare namespace Test { }"
                    ]
                }
            ]
        }
    ]);
