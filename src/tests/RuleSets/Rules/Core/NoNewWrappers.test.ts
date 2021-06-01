import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoNewWrappers = new RuleSuite(
    "no-new-wrappers",
    [
        {
            Description: "Checking whether initializing new objects of classes for literals such as `Boolean` are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test = new String('hello world');"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let test = 'hello world';"
                    ]
                }
            ]
        }
    ]);
