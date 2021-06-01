import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferNamespaceKeyword = new RuleSuite(
    "@typescript-eslint/prefer-namespace-keyword",
    [
        {
            Description: "Checking whether the namespace-keyword is preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.DTS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "declare module Test { }"
                    ]
                }
            ]
        }
    ]);
