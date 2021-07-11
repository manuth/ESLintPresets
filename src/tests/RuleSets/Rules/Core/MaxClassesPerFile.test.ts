import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
