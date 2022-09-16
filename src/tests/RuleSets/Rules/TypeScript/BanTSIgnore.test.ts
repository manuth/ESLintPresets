import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptBanTSComment `TypeScriptBanTSComment`} rule.
 */
export let BanTSIgnore = new RuleSuite(
    ESLintRule.TypeScriptBanTSComment,
    [
        {
            Description: "Checking whether `// @ts-ignore` comments can be used…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            // @ts-ignore
                            console.log();`
                    ]
                }
            ]
        }
    ]);
