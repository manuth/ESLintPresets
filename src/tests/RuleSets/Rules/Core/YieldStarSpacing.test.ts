import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let YieldStarSpacing = new RuleSuite(
    "yield-star-spacing",
    [
        {
            Description: "Checking whether yield-operators must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function *test()
                            {
                                yield * 1;
                            }`,
                        `
                            function *test()
                            {
                                yield *1;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function *test()
                            {
                                yield* 1;
                            }`
                    ]
                }
            ]
        }
    ]);
