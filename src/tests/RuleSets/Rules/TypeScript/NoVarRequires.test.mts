import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

let incorrectCode = 'var foo = require("foo");';

/**
 * Provides tests for the {@link ESLintRule.TypeScriptNoVarRequires `TypeScriptNoVarRequires`} rule.
 */
export let NoVarRequires = new RuleSuite(
    ESLintRule.TypeScriptNoVarRequires,
    [
        {
            Description: `Checking whether the \`${incorrectCode}\` syntax is banned…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        incorrectCode
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
