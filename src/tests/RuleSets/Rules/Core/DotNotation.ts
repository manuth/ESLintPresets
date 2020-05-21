import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let DotNotation = new RuleSuite(
    "dot-notation",
    [
        {
            Description: "Checking whether `dot-notation`-rule is disabled…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        'test["hello"];',
                        "test.hello",
                        `
                            let key = "hello";
                            test[key];`
                    ]
                }
            ]
        }
    ]);
