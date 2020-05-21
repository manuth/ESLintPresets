import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoInvalidThis = new RuleSuite(
    "no-invalid-this",
    [
        {
            Description: "Checking whether the usage of the global `this`-object is allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "this;"
                    ]
                }
            ]
        }
    ]);
