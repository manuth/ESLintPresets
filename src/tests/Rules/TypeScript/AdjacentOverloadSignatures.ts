import { RuleSuite } from "../../Debugging/RuleSuite";
import { ScriptKind } from "../../Debugging/ScriptKind";
import { TestCase } from "../../Debugging/TestCase";

let ruleTest = new RuleSuite("@typescript-eslint/adjacent-overload-signatures", {});

ruleTest.TestCases.push(
    new TestCase(
        "Checking whether the rule works as expected…",
        ScriptKind.TS,
        [
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
        ]));

export let AdjacentOverloadSignatures = ruleTest;
