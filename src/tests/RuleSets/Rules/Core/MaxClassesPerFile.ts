import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let MaxClassesPerFile = new RuleSuite(
    "max-classes-per-file",
    [
        {
            Description: "Checking whether more than one class is allowed per file…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class TestA { }
                            class TestB { }`
                    ]
                }
            ]
        }
    ]);
