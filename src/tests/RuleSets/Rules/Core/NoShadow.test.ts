import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
