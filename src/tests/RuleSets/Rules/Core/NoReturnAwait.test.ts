import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoReturnAwait = new RuleSuite(
    "no-return-await",
    [
        {
            Description: "Checking whether `return await`-expressions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            async function test()
                            {
                                return await doSlowAction();
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            async function test()
                            {
                                return doSlowAction();
                            }`
                    ]
                }
            ]
        }
    ]);
