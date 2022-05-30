import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NoUnsafeFinally `NoUnsafeFinally`} rule.
 */
export let NoUnsafeFinally = new RuleSuite(
    ESLintRule.NoUnsafeFinally,
    [
        {
            Description: "Checking whether keywords like `return` are disallowed in `finally`-blocks…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            try { }
                            catch { }
                            finally
                            {
                                return 1;
                            }`,
                        `
                            try { }
                            catch { }
                            finally
                            {
                                throw new Error();
                            }`,
                        `
                            try { }
                            catch { }
                            finally
                            {
                                break;
                            }`,
                        `
                            try { }
                            catch { }
                            finally
                            {
                                continue;
                            }`
                    ]
                }
            ]
        }
    ]);
