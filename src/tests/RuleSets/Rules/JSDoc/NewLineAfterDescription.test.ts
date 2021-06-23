import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NewLineAfterDescription = new RuleSuite(
    ESLintRule.JSDocNewlineAfterDescription,
    [
        {
            Description: "Checking whether a new line after the jsdoc-body is required…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * Test.
                             * @param a
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * Test.
                             *
                             * @param a
                             */`
                    ]
                }
            ]
        }
    ]);
