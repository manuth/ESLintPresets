import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptExplicitMemberAccessibility `TypeScriptExplicitMemberAccessibility`} rule.
 */
export let ExplicitMemberAccessibility = new RuleSuite(
    ESLintRule.TypeScriptExplicitMemberAccessibility,
    [
        {
            Description: "Checking whether the accessability of members must be declared explicitly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test
                            {
                                test: string;
                            }`,
                        `
                            class Test
                            {
                                Method() { }
                            }`,
                        `
                            class Test
                            {
                                get TestProperty()
                                {
                                    return 1;
                                }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                public test: string;
                            }`,
                        `
                            class Test
                            {
                                public Method() { }
                            }`,
                        `
                            class Test
                            {
                                public get TestProperty()
                                {
                                    return 1;
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
