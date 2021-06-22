import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoFloatingPromises = new RuleSuite(
    "@typescript-eslint/no-floating-promises",
    [
        {
            Description: "Checking whether floating promises are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                return new Promise(() => { });
                            }

                            test();`
                    ]
                }
            ]
        }
    ]);
