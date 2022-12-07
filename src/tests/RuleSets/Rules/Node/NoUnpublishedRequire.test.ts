import { IPackageMetadata } from "@manuth/package-json-editor";
import tsNameofProxy from "ts-nameof-proxy";
import { ESLintRule } from "../../../../ESLintRule.cjs";
import { RuleSet } from "../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../Debugging/ScriptKind.js";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite.js";

const { nameOf } = tsNameofProxy;

/**
 * Provides tests for the {@link ESLintRule.NodeNoUnpublishedRequire `NodeNoUnpublishedRequire`} rule.
 */
export let NoUnpublishedRequire = new ImportVisibilitySuite(
    ESLintRule.NodeNoUnpublishedRequire,
    [
        {
            Description: `Checking whether requiring \`${nameOf<IPackageMetadata>((p) => p.devDependencies)}\` from public files is disallowed…`,
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
