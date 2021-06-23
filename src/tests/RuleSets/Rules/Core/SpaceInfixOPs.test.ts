import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SpaceInfixOPs = new RuleSuite(
    ESLintRule.SpaceInfixOPs,
    [
        {
            Description: "Checking whether spacing around operators must be present…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = 1+2;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 1 + 2;"
                    ]
                }
            ]
        }
    ]);
