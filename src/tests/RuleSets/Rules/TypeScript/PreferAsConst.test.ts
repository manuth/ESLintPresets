import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferAsConst = new RuleSuite(
    "@typescript-eslint/prefer-as-const",
    [
        {
            Description: "Checking whether `as const` is suggested…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'let foo: "foo" = "foo";'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'let foo = "foo" as const;'
                    ]
                }
            ]
        }
    ]);
