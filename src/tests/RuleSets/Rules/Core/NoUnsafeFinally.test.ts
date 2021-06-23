import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
