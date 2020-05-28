import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ConstructorSuper = new RuleSuite(
    "constructor-super",
    [
        {
            Description: "Checking whether constructors must contain a `super()`-call…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            class BaseClass {
                                constructor() { }
                            }
                            class TestClass {
                                constructor() {
                                }
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class BaseClass {
                                constructor() { }
                            }
                            class TestClass {
                                constructor() {
                                    super();
                                }
                            }`
                    ]
                }
            ]
        }
    ]);
