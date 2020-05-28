import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let RequireParamType = new RuleSuite(
    "jsdoc/require-param-type",
    [
        {
            Description: "Checking whether parameter-types in jsdocs are required in javascript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param {string} test
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether parameter-types in jsdocs aren't required in typescript-files…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param test
                             */`
                    ]
                }
            ]
        }
    ]);
