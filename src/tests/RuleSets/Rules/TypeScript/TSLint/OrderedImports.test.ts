import { TSLintRule } from "../../../../../TSLintRule";
import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite";

export let OrderedImports = new TSLintRuleSuite(
    TSLintRule.OrderedImports,
    [
        {
            Description: "Checking whether the order import-sources is ignored…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            import { test2 } from "b";
                            import { test1 } from "a";`,
                        `
                            import { test1 } from "a";
                            import { test2 } from "b";`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether imported members must be ordered alphabetically…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'import { B, A } from "test"'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'import { A, B } from "test"'
                    ]
                }
            ]
        }
    ]);
