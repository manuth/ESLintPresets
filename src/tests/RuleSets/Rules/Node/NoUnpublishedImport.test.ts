import nameOf from "@fluffy-spoon/name-of";
import { IPackageMetadata } from "@manuth/package-json-editor";
import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite.js";

const { getPropertyName } = nameOf;

/**
 * Provides tests for the {@link ESLintRule.NodeNoUnpublishedImport `NodeNoUnpublishedImport`} rule.
 */
export let NoUnpublishedImport = new ImportVisibilitySuite(
    ESLintRule.NodeNoUnpublishedImport,
    [
        {
            Description: `Checking whether importing \`${getPropertyName<IPackageMetadata>((p) => p.devDependencies)}\` from public files is disallowed…`,
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
