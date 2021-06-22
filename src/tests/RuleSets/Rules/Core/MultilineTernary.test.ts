import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let MultilineTernary = new RuleSuite(
    "multiline-ternary",
    [
        {
            Description: "Checking whether ternary operations either must be consistently multiline or consistently single-line…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            true ?
                            1 : 2;`,
                        `
                            true ? 1 :
                                2;`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "true ? 1 : 2;",
                        `
                            true ?
                                1 :
                                2;`
                    ]
                }
            ]
        }
    ]);
