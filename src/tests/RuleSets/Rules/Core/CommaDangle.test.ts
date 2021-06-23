import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CommaDangle = new RuleSuite(
    ESLintRule.CommaDangle,
    [
        {
            Description: "Checking whether trailing commas are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x = [
                                1,
                                2,
                            ];`,
                        `
                            let x = {
                                a: 1,
                                b: 2,
                            };`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x = [
                                1,
                                2
                            ];`,
                        `
                            let x = {
                                a: 2,
                                b: 1
                            };`
                    ]
                }
            ]
        }
    ]);
