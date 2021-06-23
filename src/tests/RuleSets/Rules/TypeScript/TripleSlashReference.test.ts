import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let TripleSlashReference = new RuleSuite(
    ESLintRule.TypeScriptTripleSlashReference,
    [
        {
            Description: "Checking whether tripple-slash-references are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        '/// <reference path="./lib/test.d.ts" />'
                    ]
                }
            ]
        }
    ]);
