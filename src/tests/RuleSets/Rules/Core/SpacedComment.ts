import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SpacedComment = new RuleSuite(
    "spaced-comment",
    [
        {
            Description: "Checking whether comments must start with a space…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "//test",
                        "/*test*/",
                        "/*test */"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "// test",
                        "/* test*/",
                        "/* test */"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether the rule is disabled for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "//test",
                        "/*test*/",
                        "/*test */"
                    ]
                }
            ]
        }
    ]);
