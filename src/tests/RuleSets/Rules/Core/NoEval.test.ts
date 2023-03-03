import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite.js";

/**
 * Provides tests for the {@link ESLintRule.NoEval `NoEval`} rule.
 */
export let NoEval = new RuleSuite(
    ESLintRule.NoEval,
    [
        {
            // eslint-disable-next-line no-eval
            Description: `Checking whether the \`${nameof(eval)}\`-method and similar methods are disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        // eslint-disable-next-line no-eval
                        `${nameof(eval)}('console.log()')`
                    ]
                }
            ]
        }
    ]);
