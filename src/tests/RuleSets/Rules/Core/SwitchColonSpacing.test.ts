import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.SwitchColonSpacing `SwitchColonSpacing`} rule.
 */
export let SwitchColonSpacing = new RuleSuite(
    ESLintRule.SwitchColonSpacing,
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
