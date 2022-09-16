import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
