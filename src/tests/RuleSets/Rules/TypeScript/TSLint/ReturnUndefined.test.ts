import { TSLintRule } from "../../../../../TSLintRule.cjs";
import { RuleSet } from "../../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../../Debugging/ScriptKind.js";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite.js";

/**
 * Provides tests for the {@link TSLintRule.ReturnUndefined `ReturnUndefined`} rule.
 */
export let ReturnUndefined = new TSLintRuleSuite(
    TSLintRule.ReturnUndefined,
    [
        {
            Description: `Checking whether \`return ${undefined};\` is disallowed in void \`${nameof(Function)}\`s…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: () => void;
                            x = () => {
                                return undefined;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: () => void;
                            x = () => {
                                return;
                            }`
                    ]
                }
            ]
        },
        {
            Description: `Checking whether \`return;\` is disallowed in value-returning \`${nameof(Function)}\`s…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let x: () => string;
                            x = () => {
                                return;
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            let x: () => string;
                            x = () => {
                                return undefined;
                            }`
                    ]
                }
            ]
        }
    ]);
