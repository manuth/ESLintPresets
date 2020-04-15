import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CheckIndentation = new RuleSuite(
    "jsdoc/check-indentation",
    [
        {
            Description: "Checking whether the parameter names must be matching…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param a
                             *  Test
                             */
                            function test(a) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param a
                             * Test
                             */
                            function test(a) { }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the indentation is ignored for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param a
                             *  Test
                             */
                            function test(a) { }`
                    ]
                }
            ]
        }
    ]);
