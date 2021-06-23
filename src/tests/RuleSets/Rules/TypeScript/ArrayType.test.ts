import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrayType = new RuleSuite(
    ESLintRule.TypeScriptArrayType,
    [
        {
            Description: "Checking whether complex array-types require the generic array class…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: (string | number)[];`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: Array<string | number>;`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether simple array-types require a simple array definition…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: Array<any>;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: any[];`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether any array-types can be declared with any possible way…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let a: Array<any>;
                            let b: any[];
                            let x: Array<string | number>;
                            let y: (string | number)[];`
                    ]
                }
            ]
        }
    ]);
