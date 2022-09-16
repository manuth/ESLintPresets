import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.TypeScriptUnboundMethod `TypeScriptUnboundMethod`} rule.
 */
export let UnboundMethod = new RuleSuite(
    ESLintRule.TypeScriptUnboundMethod,
    [
        {
            Description: "Checking whether unbound methods are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Logger {
                                public Log() { }
                            }
                            
                            let logger = new Logger();
                            let log = logger.Log;
                            log();`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            class Logger {
                                public Log() { }
                            }
                            
                            let logger = new Logger();
                            let log = () => logger.Log();
                            log();`
                    ]
                }
            ]
        }
    ]);
