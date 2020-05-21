import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let RequireParamDescription = new RuleSuite(
    "jsdoc/require-param-description",
    [
        {
            Description: "Checking whether descriptions are required in `@param`-tags…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @param
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param
                             * This is a test.
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @param
                             */`
                    ]
                }
            ]
        }
    ]);
