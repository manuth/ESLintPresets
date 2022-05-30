import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
