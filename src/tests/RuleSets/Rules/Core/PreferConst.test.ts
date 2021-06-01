import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PreferConst = new RuleSuite(
    "prefer-const",
    [
        {
            Description: "Checking whether the `const`-keyword is not preferred…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = "";
                            console.log(test);`
                    ]
                }
            ]
        }
    ]);
