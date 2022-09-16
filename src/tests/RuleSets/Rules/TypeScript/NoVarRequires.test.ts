import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

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
