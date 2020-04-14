import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoExplicitAny = new RuleSuite(
    "@typescript-eslint/no-explicit-any",
    [
        {
            Description: "Checking whether explicit `any` asertions are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x: any;",
                        "let x: any[];",
                        "let x: Map<string, any>;"
                    ]
                }
            ]
        }
    ]);
