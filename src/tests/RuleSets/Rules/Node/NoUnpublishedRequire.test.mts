import { IPackageMetadata } from "@manuth/package-json-editor";
import { ESLintRule } from "../../../../ESLintRule.js";
import { RuleSet } from "../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../Debugging/ScriptKind.mjs";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite.mjs";

/**
 * Provides tests for the {@link ESLintRule.NodeNoUnpublishedRequire `NodeNoUnpublishedRequire`} rule.
 */
export let NoUnpublishedRequire = new ImportVisibilitySuite(
    ESLintRule.NodeNoUnpublishedRequire,
    [
        {
            Description: `Checking whether requiring \`${nameof<IPackageMetadata>((p) => p.devDependencies)}\` from public files is disallowed…`,
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `
                            const test = require("${ImportVisibilitySuite.DevelopmentDependency}")`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        `
                            const test = require("${ImportVisibilitySuite.PublicDependency}")`
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
                            const test = require("./${ImportVisibilitySuite.IgnoredFileName}")`
                    ]
                }
            ]
        }
    ]);
