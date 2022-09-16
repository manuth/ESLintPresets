import { TSLintRule } from "../../../../../TSLintRule.cjs";
import { RuleSet } from "../../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../../Debugging/ScriptKind.js";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite.js";

/**
 * Provides tests for the {@link TSLintRule.OrderedImports `OrderedImports`} rule.
 */
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
