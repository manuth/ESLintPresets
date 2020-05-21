import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SpaceUnaryOPs = new RuleSuite(
    "space-unary-ops",
    [
        {
            Description: "Checking whether spacing of unary operators must be correct…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "delete(test);",
                        "++ test;",
                        "test ++;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "delete test;",
                        "++test;",
                        "test++;"
                    ]
                }
            ]
        }
    ]);
