import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptBanTypes `TypeScriptBanTypes`} rule.
 */
export let BanTypes = new RuleSuite(
    ESLintRule.TypeScriptBanTypes,
    [
        {
            Description: "Checking whether unnecessary types are blocked…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: string;
                            let y: number;`
                    ]
                },
                {
                    Valid: false,
                    Snippets: [
                        "let x: Number;",
                        "let y: String;"
                    ]
                }
            ]
        }
    ]);
