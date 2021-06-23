import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUnusedVars = new RuleSuite(
    ESLintRule.TypeScriptNoUnusedVars,
    [
        {
            Description: "Checking whether unused variables cause an error…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let test;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test;
                            console.log(test);`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether unused arguments are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "function (unused, used) { console.log(used) }",
                        "function (unused) { }"
                    ]
                }
            ]
        }
    ]);
