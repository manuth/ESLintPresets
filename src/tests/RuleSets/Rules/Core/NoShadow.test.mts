import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoShadow `NoShadow`} rule.
 */
export let NoShadow = new RuleSuite(
    ESLintRule.NoShadow,
    [
        {
            Description: "Checking whether shadowed variables are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test;
                            
                            function ()
                            {
                                let test;
                            }`
                    ]
                }
            ]
        }
    ]);
