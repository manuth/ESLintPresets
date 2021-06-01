import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let Deprecation = new RuleSuite(
    "deprecation/deprecation",
    [
        {
            Description: "Checking whether the usage of deprecated methods are prohibited…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            /**
                             * @deprecated
                             */
                            function Test()
                            { }

                            Test();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function Test()
                            { }

                            Test();`,
                        `
                            /**
                             * @deprecated
                             */
                            function Test()
                            { }`
                    ]
                }
            ]
        }
    ]);
