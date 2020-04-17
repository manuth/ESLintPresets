import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let TemplateCurlySpacing = new RuleSuite(
    "template-curly-spacing",
    [
        {
            Description: "Checking whether spaces at the beginning and the end of template-expressions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "`${ test }`",
                        "`${test }`",
                        "`${ test}`"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "`${test}`"
                    ]
                }
            ]
        }
    ]);
