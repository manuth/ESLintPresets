import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEmptyInterface = new RuleSuite(
    ESLintRule.TypeScriptNoEmptyInterface,
    [
        {
            Description: "Checking whether empty interfaces and types are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "interface Test { }",
                        "type Test = { }"
                    ]
                }
            ]
        }
    ]);
