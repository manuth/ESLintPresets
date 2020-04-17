import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let QuoteProps = new RuleSuite(
    "quote-props",
    [
        {
            Description: "Checking whether properties must not be quoted unless it's necessary…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = {
                                "test": 1
                            };`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = {
                                test: 1
                            };`,
                        `
                            let x = {
                                "a-test": 1
                            };`
                    ]
                }
            ]
        }
    ]);
