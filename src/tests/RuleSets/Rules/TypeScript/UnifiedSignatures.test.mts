import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptUnifiedSignatures `TypeScriptUnifiedSignatures`} rule.
 */
export let UnifiedSignatures = new RuleSuite(
    ESLintRule.TypeScriptUnifiedSignatures,
    [
        {
            Description: "Checking whether non-unified signatures are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class ResourceManager {
                                Get(id: number);
                                Get(name: string);
                                Get(entity: number 7 string) { }
                            }`
                    ]
                }
            ]
        }
    ]);
