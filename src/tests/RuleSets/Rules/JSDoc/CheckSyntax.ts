import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CheckSyntax = new RuleSuite(
    "jsdoc/check-syntax",
    [
        {
            Description: "Checking whether syntax-errors cause rule-failures…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param {string=} a
                             */
                            function test(a) { }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string} a
                             */
                            function test(a) { }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the `check-syntax` rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string=} a
                             */
                            function test(a) { }`
                    ]
                }
            ]
        }
    ]);
