import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let CheckValues = new RuleSuite(
    "jsdoc/check-values",
    [
        {
            Description: "Checking whether specific tags are checked for their values…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @version test
                             */`,
                        `
                            /**
                             * @since test
                             */`,
                        `
                            /**
                             * @author
                             */`,
                        `
                            /**
                             * @license inexistent license
                             */`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            /**
                             * @version 1.0.0
                             */`,
                        `
                            /**
                             * @since 1.0.0
                             */`,
                        `
                            /**
                             * @author Me
                             */`,
                        `
                            /**
                             * @license MIT
                             */`
                    ]
                }
            ]
        }
    ]);
