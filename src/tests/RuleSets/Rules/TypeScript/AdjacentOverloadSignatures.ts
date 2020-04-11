import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let AdjacentOverloadSignatures = new RuleSuite(
    "@typescript-eslint/adjacent-overload-signatures",
    [
        {
            Description: "Checking whether the rule works as expected…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            function test1(): void { }
                            function test2(): void { }
                            function test1(id: number): void { }
                        `
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            function test1(): void { }
                            function test1(id: number): void { }
                            function test2(): void { }`
                    ]
                }
            ]
        }
    ]);
