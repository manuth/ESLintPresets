import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUndefInit = new RuleSuite(
    ESLintRule.NoUndefInit,
    [
        {
            Description: `Checking whether initializations to \`${undefined}\` are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = undefined;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x;",
                        "const x = undefined;"
                    ]
                }
            ]
        }
    ]);
