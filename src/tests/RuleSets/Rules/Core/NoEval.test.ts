import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEval = new RuleSuite(
    "no-eval",
    [
        {
            Description: "Checking whether the `eval`-method and similar methods are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "eval('console.log()')"
                    ]
                }
            ]
        }
    ]);
