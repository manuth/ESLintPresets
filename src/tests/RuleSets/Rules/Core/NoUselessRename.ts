import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoUselessRename = new RuleSuite(
    "no-useless-rename",
    [
        {
            Description: "Checking whether useless names are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        'import { test as test } from "test";',
                        "export { test as test };",
                        'export { test as test } from "test";',
                        "let { test: test } = x;",
                        'let { "test": test } = x;',
                        "function test({ test: test }) { }",
                        "({ test: test }) => { };"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'import { test } from "test";',
                        'import { test as test2 } from "test";',
                        "export { test };",
                        "export { test as test2 };",
                        'export { test } from "test";',
                        'export { test as test2 } from "test";',
                        "let { test } = x;",
                        "let { test: test2 } = x;",
                        'let { "test": test2 } = x;',
                        "function test({ test }) { }",
                        "function test({ test: test2 }) { }",
                        "({ test }) => { }",
                        "({ test: test2 }) => { }"
                    ]
                }
            ]
        }
    ]);
