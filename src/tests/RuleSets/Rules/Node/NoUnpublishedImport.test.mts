import { IPackageMetadata } from "@manuth/package-json-editor";
import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NodeNoUnpublishedImport `NodeNoUnpublishedImport`} rule.
 */
export let NoUnpublishedImport = new ImportVisibilitySuite(
    ESLintRule.NodeNoUnpublishedImport,
    [
        {
            Description: `Checking whether importing \`${nameof<IPackageMetadata>((p) => p.devDependencies)}\` from public files is disallowed…`,
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
