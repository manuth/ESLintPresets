import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.Curly `Curly`} rule.
 */
export let Curly = new RuleSuite(
    ESLintRule.Curly,
    [
        {
            Description: `Checking whether the \`${ESLintRule.Curly}\`-rule is acting as expected…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "if (true) console.log();",
                        `
                            if (true)
                                console.log();`,
                        `
                            if (true)
                            {
                                console.log();
                            }`
                    ]
                }
            ]
        }
    ]);
