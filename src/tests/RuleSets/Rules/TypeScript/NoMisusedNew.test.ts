import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
