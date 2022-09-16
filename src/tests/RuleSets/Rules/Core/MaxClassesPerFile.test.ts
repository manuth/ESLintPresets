import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.MaxClassesPerFile `MaxClassesPerFile`} rule.
 */
export let MaxClassesPerFile = new RuleSuite(
    ESLintRule.MaxClassesPerFile,
    [
        {
            Description: "Checking whether more than one class is allowed per file…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class TestA { }
                            class TestB { }`
                    ]
                }
            ]
        }
    ]);
