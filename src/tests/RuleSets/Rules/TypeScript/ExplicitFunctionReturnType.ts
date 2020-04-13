import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ExplicitFunctionReturnType = new RuleSuite(
    "@typescript-eslint/explicit-function-return-type",
    [
        {
            Description: "Checking whether return-types must be specified…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function test() { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function test(): void { }"
                    ]
                }
            ]
        }
    ]);
