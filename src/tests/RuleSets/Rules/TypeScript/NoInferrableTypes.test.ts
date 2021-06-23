import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoInferrableTypes = new RuleSuite(
    ESLintRule.TypeScriptNoInferrableTypes,
    [
        {
            Description: "Checking whether inferrable types are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x: string = 'hello world';"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 'hello world';"
                    ]
                }
            ]
        }
    ]);
