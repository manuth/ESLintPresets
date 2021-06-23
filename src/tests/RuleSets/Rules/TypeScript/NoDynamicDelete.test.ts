import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDynamicDelete = new RuleSuite(
    ESLintRule.TypeScriptNoDynamicDelete,
    [
        {
            Description: "Checking whether dynamic deletes are allowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "delete container[1];",
                        "delete container['-prop-that-must-be-quoted'];",
                        "delete container.abc;",
                        "delete container[variable];",
                        "delete container[variable.toUpperCase()];",
                        "delete container['abc'];"
                    ]
                }
            ]
        }
    ]);
