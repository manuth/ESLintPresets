import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite";

export let ReturnUndefined = new TSLintRuleSuite(
    "return-undefined",
    [
        {
            Description: "Checking whether `return undefined;` is disallowed in void functions…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: () => void;
                            x = () => {
                                return undefined;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: () => void;
                            x = () => {
                                return;
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether `return;` is disallowed in value-returning functions…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: () => string;
                            x = () => {
                                return;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: () => string;
                            x = () => {
                                return undefined;
                            }`
                    ]
                }
            ]
        }
    ]);
