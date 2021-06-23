import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDuplicates = new RuleSuite(
    ESLintRule.ImportNoDuplicates,
    [
        {
            Description: "Checking whether duplicate imports are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import fs from "fs";
                            import { readFile } from "fs";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import fs, { readFile } from "fs";`
                    ]
                }
            ]
        }
    ]);
