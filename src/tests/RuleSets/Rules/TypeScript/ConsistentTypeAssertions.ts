import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ConsistentTypeAssertions = new RuleSuite(
    "@typescript-eslint/consistent-type-assertions",
    [
        {
            Description: "Checking whether types must be asserted consistently…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "let x = <any>1;"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "let x = 1 as any;"
                    ]
                }
            ]
        }
    ]);
