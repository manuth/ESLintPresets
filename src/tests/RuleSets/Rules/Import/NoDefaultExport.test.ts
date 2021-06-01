import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDefaultExport = new RuleSuite(
    "import/no-default-export",
    [
        {
            Description: "Checking whether default exports are disallowed…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            let test = "Hello World";
                            export default test;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'export let test = "Hello World";',
                        'export = "Hello World";'
                    ]
                }
            ]
        },
        {
            Description: "Checking whether default exports are allowed for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = "Hello World";
                            export default test;`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether default exports are allowed in `.d.ts`-files…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.DTS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            let test = "Hello World";
                            export default test;`
                    ]
                }
            ]
        }
    ]);
