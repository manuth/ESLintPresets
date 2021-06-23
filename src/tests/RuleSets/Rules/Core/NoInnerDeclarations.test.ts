import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoInnerDeclarations = new RuleSuite(
    ESLintRule.NoInnerDeclarations,
    [
        {
            Description: "Checking whether inner function-declarations are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test()
                            {
                                function test2() { }
                            }`
                    ]
                }
            ]
        }
    ]);
