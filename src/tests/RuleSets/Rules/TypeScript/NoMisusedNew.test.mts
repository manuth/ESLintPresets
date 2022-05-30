import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoMisusedNew `TypeScriptNoMisusedNew`} rule.
 */
export let NoMisusedNew = new RuleSuite(
    ESLintRule.TypeScriptNoMisusedNew,
    [
        {
            Description: "Checking whether misused `new`s are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            interface I
                            {
                                new (): I;
                            }`,
                        `
                            interface I
                            {
                                constructor(): void;
                            }`,
                        `
                            declare class C
                            {
                                new (): C;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            declare class C
                            {
                                constructor() { }
                            }
                            
                            interface I
                            {
                                new(): C;
                            }`
                    ]
                }
            ]
        }
    ]);
