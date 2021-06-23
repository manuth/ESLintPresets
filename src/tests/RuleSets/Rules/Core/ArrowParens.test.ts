import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ArrowParens = new RuleSuite(
    ESLintRule.ArrowParens,
    [
        {
            Description: "Checking whether arrow-parens aren't enforced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = () => { };",
                        "let x = a => { };",
                        "let x = (a) => { };",
                        "let x = (a, b) => { };"
                    ]
                }
            ]
        }
    ]);
