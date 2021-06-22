import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoThrowLiteral = new RuleSuite(
    "no-throw-literal",
    [
        {
            Description: "Checking whether throwing literals is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'throw "Hello World";'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'throw new Error("Hello World");'
                    ]
                }
            ]
        }
    ]);
