import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite";

export let NoUnpublishedImport = new ImportVisibilitySuite(
    ESLintRule.NodeNoUnpublishedImport,
    [
        {
            Description: "Checking whether importing `devDependencies` from public files is disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import {} from "${ImportVisibilitySuite.DevelopmentDependency}";`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            import {} from "${ImportVisibilitySuite.PublicDependency}";`
                    ]
                }
            ]
        },
        {
            Description: "Checking whether `.npmignore`d files are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            import {} from "./${ImportVisibilitySuite.IgnoredFileName}";`
                    ]
                }
            ]
        }
    ]);
