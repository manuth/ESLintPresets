import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
