import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

/**
 * Provides tests for the {@link ESLintRule.NoFallthrough `NoFallthrough`} rule.
 */
export let NoFallthrough = new RuleSuite(
    ESLintRule.NoFallthrough,
    [
        {
            Description: "Checking whether case fall-throughs are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            switch (Math.random())
                            {
                                case 0:
                                    console.log(0);
                                case 1:
                                    console.log(1);
                                default:
                                    console.log("end");
                                    break;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            switch (Math.random())
                            {
                                case 0:
                                    console.log(0);
                                    break;
                                case 1:
                                    console.log(1);
                                    break;
                                default:
                                    console.log("end");
                                    break;
                            }`
                    ]
                }
            ]
        }
    ]);
