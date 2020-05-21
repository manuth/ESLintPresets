import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ComputedPropertySpacing = new RuleSuite(
    "computed-property-spacing",
    [
        {
            Description: "Checking whether spacing in computed properties is enforced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = {
                                [ "hello" ]: "world"
                            };`,
                        `
                            let x = {
                                ["hello" ]: "world"
                            };`,
                        `
                            let x = {
                                [ "hello"]: "world"
                            };`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                ["hello"]: "world"
                            };`
                    ]
                }
            ]
        }
    ]);
