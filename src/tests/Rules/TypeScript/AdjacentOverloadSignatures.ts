import { RuleTest } from "../../RuleTest";
import { ScriptKind } from "../../ScriptKind";
import { TestCase } from "../../TestCase";

let ruleTest = new RuleTest("@typescript-eslint/adjacent-overload-signatures", {});

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
