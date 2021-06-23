import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferObjectSpread = new RuleSuite(
    ESLintRule.PreferObjectSpread,
    [
        {
            Description: "Checking whether object-spreading is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let test = {};
                            let x = Object.assign({}, test);`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = {};
                            let x = {
                                ...test
                            };`
                    ]
                }
            ]
        }
    ]);
