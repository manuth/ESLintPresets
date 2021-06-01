import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let SwitchColonSpacing = new RuleSuite(
    "switch-colon-spacing",
    [
        {
            Description: "Checking whether colons in `switch`es must be spaced correctly…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            switch (test)
                            {
                                case 1 :console.log();
                            }`,
                        `
                            switch (test)
                            {
                                case 1 : console.log();
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            switch (test)
                            {
                                case 1: console.log();
                            }`
                    ]
                }
            ]
        }
    ]);
