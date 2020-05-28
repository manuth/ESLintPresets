import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

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

export let Complexity = new RuleSuite(
    "complexity",
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
