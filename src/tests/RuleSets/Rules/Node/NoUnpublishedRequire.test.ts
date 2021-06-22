import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { ImportVisibilitySuite } from "./ImportVisibilitySuite";

export let NoUnpublishedRequire = new ImportVisibilitySuite(
    "node/no-unpublished-require",
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