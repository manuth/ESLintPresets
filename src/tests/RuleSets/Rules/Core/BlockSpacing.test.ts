import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let BlockSpacint = new RuleSuite(
    "block-spacing",
    [
        {
            Description: "Checking whether function-blocks must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = () => {return true;};"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { return true; };"
                    ]
                }
            ]
        }
    ]);
