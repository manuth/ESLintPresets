import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
