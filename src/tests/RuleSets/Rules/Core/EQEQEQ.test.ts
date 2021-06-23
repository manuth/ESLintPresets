import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let EQEQEQ = new RuleSuite(
    ESLintRule.EQEQEQ,
    [
        {
            Description: "Checking whether tripple equal signs are required…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (1 == 2) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "if (1 === 2) { }"
                    ]
                }
            ]
        }
    ]);
