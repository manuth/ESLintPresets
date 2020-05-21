import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NewLineAfterDescription = new RuleSuite(
    "jsdoc/newline-after-description",
    [
        {
            Description: "Checking whether a new line after the jsdoc-body is required…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
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
