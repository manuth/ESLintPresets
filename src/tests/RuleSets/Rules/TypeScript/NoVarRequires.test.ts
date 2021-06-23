import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoVarRequires = new RuleSuite(
    ESLintRule.TypeScriptNoVarRequires,
    [
        {
            Description: 'Checking whether the `var foo = require("foo"); syntax is banned…',
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'var foo = require("foo");'
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'import foo = require("foo");',
                        '(async () => (await import("fs")).existsSync("test.txt"))();'
                    ]
                }
            ]
        }
    ]);
