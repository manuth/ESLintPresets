import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let BanTypes = new RuleSuite(
    ESLintRule.TypeScriptBanTypes,
    [
        {
            Description: "Checking whether unnecessary types are blocked…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: string;
                            let y: number;`
                    ]
                },
                {
                    Valid: false,
                    Snippets: [
                        "let x: Number;",
                        "let y: String;"
                    ]
                }
            ]
        }
    ]);
