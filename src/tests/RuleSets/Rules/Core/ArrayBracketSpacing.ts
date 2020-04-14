import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrayBracketSpacing = new RuleSuite(
    "array-bracket-spacing",
    [
        {
            Description: "Checking whether array-brackets are enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "[ 1,2 ]",
                        "[ 1,2]",
                        "[1,2 ]"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "[1, 2]",
                        "[1,2]"
                    ]
                }
            ]
        }
    ]);
