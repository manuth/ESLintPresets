import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let DotNotation = new RuleSuite(
    ESLintRule.DotNotation,
    [
        {
            Description: `Checking whether \`${ESLintRule.DotNotation}\`-rule is disabled…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        'test["hello"];',
                        "test.hello",
                        `
                            let key = "hello";
                            test[key];`
                    ]
                }
            ]
        }
    ]);
