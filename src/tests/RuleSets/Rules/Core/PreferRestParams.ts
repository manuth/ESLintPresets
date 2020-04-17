import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferRestParams = new RuleSuite(
    "prefer-rest-params",
    [
        {
            Description: "Checking whether rest-parameters are preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test()
                            {
                                console.log(arguments);
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test(...args)
                            {
                                console.log(args);
                            }`
                    ]
                }
            ]
        }
    ]);
