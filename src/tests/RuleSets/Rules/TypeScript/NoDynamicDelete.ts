import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoDynamicDelete = new RuleSuite(
    "@typescript-eslint/no-dynamic-delete",
    [
        {
            Description: "Checking whether the rule works as expected…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        "delete container[variable];",
                        "delete container[variable.toUpperCase()];",
                        "delete container['abc'];"
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        "delete container[1];",
                        "delete container['-prop-that-must-be-quoted'];",
                        "delete container.abc;"
                    ]
                }
            ]
        },
        {
            Description: "Checking whether this rule is deactivated for the weak rule-set…",
            RuleSet: RuleSet.Weak,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        "delete container[variable];",
                        "delete container[variable.toUpperCase()];",
                        "delete container['abc'];",
                        "delete container[1];",
                        "delete container['-quoted-prop'];",
                        "delete container.abc;"
                    ]
                }
            ]
        }
    ]);
