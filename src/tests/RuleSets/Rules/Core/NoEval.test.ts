import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let NoEval = new RuleSuite(
    "no-eval",
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
