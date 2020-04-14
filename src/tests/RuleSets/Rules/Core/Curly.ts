import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let Curly = new RuleSuite(
    "curly",
    [
        {
            Description: "Checking whether the `curly`-rule is acting as expected…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "if (true) console.log();",
                        `
                            if (true)
                                console.log();`,
                        `
                            if (true)
                            {
                                console.log();
                            }`
                    ]
                }
            ]
        }
    ]);
