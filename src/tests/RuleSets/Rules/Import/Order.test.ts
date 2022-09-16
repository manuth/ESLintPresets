import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.ImportOrder `ImportOrder`} rule.
 */
export let Order = new RuleSuite(
    ESLintRule.ImportOrder,
    [
        {
            Description: "Checking whether imports of the same group must be sorted alphabetically…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import util from "util";
                            import child_process from "child_process";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import child_process from "child_process";
                            import util from "util";`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether imports must be sorted by their group…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import test from "./test";
                            import child_process from "child_process";
                            import util from "util";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import child_process from "child_process";
                            import util from "util";
                            import anotherTest from "./another-test";
                            import test from "./test";`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether object-imports must be placed at the end of the import-statements…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import log = console.log;
                            import path = require("path");`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import path = require("path");
                            import log = console.log;`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether imports must be sorted case insensitive…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import test1 = require("aB");
                            import test2 = require("aa");`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import test1 = require("aa");
                            import test2 = require("aB");`
                    ]
                }
            ]
        }
    ]);
