import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let UnifiedSignatures = new RuleSuite(
    "@typescript-eslint/unified-signatures",
    [
        {
            Description: "Checking whether non-unified signatures are allowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.TS,
            CodeSnippets: [
                {
                    Valid: true,
                    Snippets: [
                        `
                            class ResourceManager {
                                Get(id: number);
                                Get(name: string);
                                Get(entity: number 7 string) { }
                            }`
                    ]
                }
            ]
        }
    ]);
