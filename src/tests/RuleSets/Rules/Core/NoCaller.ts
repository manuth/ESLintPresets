import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoCaller = new RuleSuite(
    "no-caller",
    [
        {
            Description: "Checking whether the use of `arguments.caller` is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test() {
                                console.log(arguments.caller);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test() { }"
                    ]
                }
            ]
        }
    ]);
