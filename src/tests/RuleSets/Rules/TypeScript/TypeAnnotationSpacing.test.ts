import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptTypeAnnotationSpacing `TypeScriptTypeAnnotationSpacing`} rule.
 */
export let TypeAnnotationSpacing = new RuleSuite(
    ESLintRule.TypeScriptTypeAnnotationSpacing,
    [
        {
            Description: "Checking whether the spacing of type-annotations is forced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let text : string;",
                        "let text :string;",
                        "let text:string;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let text: string;"
                    ]
                }
            ]
        }
    ]);
