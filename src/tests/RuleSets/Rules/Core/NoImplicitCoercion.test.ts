import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoImplicitCoercion = new RuleSuite(
    "no-implicit-coercion",
    [
        {
            Description: "Checking whether shorthand type-conversion is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "!!test",
                        '""+test'
                    ]
                }
            ]
        }
    ]);
