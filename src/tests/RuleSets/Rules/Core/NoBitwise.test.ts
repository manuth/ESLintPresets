import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoBitwise = new RuleSuite(
    ESLintRule.NoBitwise,
    [
        {
            Description: "Checking whether bitwise operators are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "console.log(1 || 2)"
                    ]
                }
            ]
        }
    ]);
