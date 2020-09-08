import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite";

export let NoVoidExpression = new TSLintRuleSuite(
    "no-void-expression",
    [
        {
            Description: "Checking whether the correct usage of void-returning functions is enforced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function x() { }
                            console.log(x());`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function x() { }
                            x();`
                    ]
                }
            ]
        }
    ]);
