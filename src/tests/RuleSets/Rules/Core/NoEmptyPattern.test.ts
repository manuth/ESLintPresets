import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmptyPattern = new RuleSuite(
    ESLintRule.NoEmptyPattern,
    [
        {
            Description: "Checking whether empty patterns are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = { a: {} };"
                    ]
                }
            ]
        }
    ]);
