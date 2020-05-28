import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoOctalEscape = new RuleSuite(
    "no-octal-escape",
    [
        {
            Description: "Checking whether octal escape-sequences are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'console.log("Copyright \\251");'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'console.log("Copyright \\u00A9");',
                        'console.log("Copyright \\xA9");'
                    ]
                }
            ]
        }
    ]);
