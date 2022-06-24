import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.mjs";

/**
 * Wraps code into an if-block.
 *
 * @param code
 * The code to wrap.
 *
 * @returns
 * The wrapped code.
 */
function wrapIf(code: string): string
{
    return `
        if (true)
        {
            ${code}
        }`;
}

/**
 * Wraps the code into an if-block recursively.
 *
 * @param count
 * The number of times to wrap the code.
 *
 * @param code
 * The code to wrap.
 *
 * @returns
 * The wrapped code.
 */
function wrapRecursive(count: number, code: string): string
{
    for (let i = 0; i < count; i++)
    {
        code = wrapIf(code);
    }

    return code;
}

/**
 * Provides tests for the {@link ESLintRule.Complexity `Complexity`} rule.
 */
export let Complexity = new RuleSuite(
    ESLintRule.Complexity,
    [
        {
            Description: "Checking whether any complexity is allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        wrapRecursive(
                            30,
                            `
                                console.log();`)
                    ]
                }
            ]
        }
    ]);
