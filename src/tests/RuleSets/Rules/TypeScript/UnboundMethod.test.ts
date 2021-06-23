import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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
