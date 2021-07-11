import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
