import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoAsyncPromiseExecutor = new RuleSuite(
    "no-async-promise-executor",
    [
        {
            Description: "Checking whether async promise-executors are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "let x = new Promise(async (resolve, reject) => { });"
                    ]
                }
            ]
        }
    ]);
