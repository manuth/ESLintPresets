import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoFloatingPromises = new RuleSuite(
    ESLintRule.TypeScriptNoFloatingPromises,
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
