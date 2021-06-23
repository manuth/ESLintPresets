import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoWhitespaceBeforeProperty = new RuleSuite(
    ESLintRule.NoWhitespaceBeforeProperty,
    [
        {
            Description: "Checking whether whitespaces in property-paths are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'x ["test"]',
                        "x. test",
                        "x .test",
                        "x .test()"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'x["test"]',
                        "x.test",
                        "x.test()"
                    ]
                }
            ]
        }
    ]);
