import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let UseIsNaN = new RuleSuite(
    "use-isnan",
    [
        {
            Description: "Checking whether `NaN`-equatations are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "if (test == NaN) { }",
                        "if (test === NaN) { }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import { isNaN } from "util";
                            
                            if (isNaN(test)) { }`
                    ]
                }
            ]
        }
    ]);