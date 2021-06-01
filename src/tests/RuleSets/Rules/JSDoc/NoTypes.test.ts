import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoTypes = new RuleSuite(
    "jsdoc/no-types",
    [
        {
            Description: "Checking whether types in jsdoc-comments are disallowed for typescript-files…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param {string} test
                             */
                            function test(test) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */
                            function test(test: string) { }`
                    ]
                }
            ]
        }
    ]);
