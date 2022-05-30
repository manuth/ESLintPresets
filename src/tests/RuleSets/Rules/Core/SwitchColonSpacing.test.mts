import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

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
