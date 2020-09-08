import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let GeneratorStarSpacing = new RuleSuite(
    "generator-star-spacing",
    [
        {
            Description: "Checking whether the expected star-spacing is forced…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "function*generator() { }",
                        "function *generator() { }",
                        "function * generator() { }",
                        "let x = function* () { }",
                        "let x = function * () { }",
                        "let x = function *() { }",
                        "class { static*generator() { } }",
                        "class { static* generator() { } }",
                        "class { static * generator() { } }"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "function* generator()",
                        "let x = function*()",
                        "class { static *generator() }"
                    ]
                }
            ]
        }
    ]);
