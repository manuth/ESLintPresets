import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoConfusingVoidExpression = new RuleSuite(
    "@typescript-eslint/no-confusing-void-expression",
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
        },
        {
            Description: "Checking whether void-returning functions are allowed in the shorthand-arrow form…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function x() { }
                            let y = () => x();`
                    ]
                }
            ]
        }
    ]);
