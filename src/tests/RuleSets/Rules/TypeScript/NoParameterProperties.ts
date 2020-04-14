import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoParameterProperties = new RuleSuite(
    "@typescript-eslint/no-parameter-properties",
    [
        {
            Description: "Checking whether parameter-properties are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test
                            {
                                constructor(public test) { }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Test
                            {
                                public test;

                                constructor(test)
                                {
                                    this.test = test;
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
