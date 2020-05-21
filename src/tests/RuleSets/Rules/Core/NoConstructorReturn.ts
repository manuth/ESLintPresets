import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoConstructorReturn = new RuleSuite(
    "no-constructor-return",
    [
        {
            Description: "Checking whether `return`-statements in constructors are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class Test {
                                constructor() {
                                    return TestFactory.Create();
                                }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            Class Test {
                                constructor() { }
                            }`
                    ]
                }
            ]
        }
    ]);
