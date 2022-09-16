import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoCaseDeclarations `NoCaseDeclarations`} rule.
 */
export let NoCaseDeclarations = new RuleSuite(
    ESLintRule.NoCaseDeclarations,
    [
        {
            Description: "Checking whether declarations in switch-case expressions are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            switch (test)
                            {
                                case 1:
                                    let test2 = "hello";
                                    break;
                            }`
                    ]
                }
            ]
        }
    ]);
