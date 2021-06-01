import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let TypeAnnotationSpacing = new RuleSuite(
    "@typescript-eslint/type-annotation-spacing",
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
