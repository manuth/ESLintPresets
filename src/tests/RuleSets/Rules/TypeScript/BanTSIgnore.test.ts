import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let BanTSIgnore = new RuleSuite(
    "@typescript-eslint/ban-ts-ignore",
    [
        {
            Description: "Checking whether `// @ts-ignore` comments can be used…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.Scripts,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            // @ts-ignore
                            console.log();`
                    ]
                }
            ]
        }
    ]);
