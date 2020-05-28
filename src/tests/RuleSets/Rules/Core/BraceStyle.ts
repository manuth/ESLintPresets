import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let BraceStyle = new RuleSuite(
    "brace-style",
    [
        {
            Description: "Checking whether the brace-style is enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (true) {

                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (true)
                            {

                            }`,
                        `
                            if (true)
                            { }`,
                        "if (true) { }"
                    ]
                }
            ]
        }
    ]);
