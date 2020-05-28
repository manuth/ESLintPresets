import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrowSpacing = new RuleSuite(
    "arrow-spacing",
    [
        {
            Description: "Checking whether arrow functions must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = ()=>{}"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { }"
                    ]
                }
            ]
        }
    ]);
