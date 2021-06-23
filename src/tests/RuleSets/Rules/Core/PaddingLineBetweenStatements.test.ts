import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let PaddingLineBetweenStatements = new RuleSuite(
    ESLintRule.PaddingLineBetweenStatements,
    [
        {
            Description: "Checking whether lines between some statements are required…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            if (test)
                            {
                                console.log();
                            }
                            console.log();`,
                        `
                            console.log()
                            if (test)
                            {
                                console.log();
                            }`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (test)
                            {
                                console.log();
                            }

                            console.log();`,
                        `
                            console.log();

                            if (test)
                            {
                                console.log();
                            }`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether block-statements are allowed before certain keywords…",
            RuleSet: RuleSet.Recommended,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            if (test)
                            {
                                console.log();
                            }
                            return;`,
                        `
                            switch (test)
                            {
                                case 1:
                                    if (test)
                                    {
                                        console.log();
                                    }
                                    break;
                            }`,
                        `
                            for (let entry of list)
                            {
                                if (test)
                                {
                                    console.log();
                                }
                                continue;
                            }`
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
                        `
                            if (test)
                            {
                                console.log();
                            }
                            console.log();`,
                        `
                            console.log();
                            if (test)
                            {
                                console.log();
                            }`
                    ]
                }
            ]
        }
    ]);
