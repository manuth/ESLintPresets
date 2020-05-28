import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CheckAlignment = new RuleSuite(
    "jsdoc/check-alignment",
    [
        {
            Description: "Checking whether the alignment is enforced correctly…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                            *
                             */`,
                        `
                            /**
                              *
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             *
                             */`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the alignment is ignored for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                            *
                             */`
                    ]
                }
            ]
        }
    ]);
