import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let UseIsNaN = new RuleSuite(
    ESLintRule.UseIsNaN,
    [
        {
            Description: `Checking whether \`${NaN}\`-equations are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (test == NaN) { }",
                        "if (test === NaN) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (isNaN(test)) { }`
                    ]
                }
            ]
        }
    ]);
