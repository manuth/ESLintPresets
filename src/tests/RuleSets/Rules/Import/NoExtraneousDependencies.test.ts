import { ESLintRule } from "../../../../ESLintRule";
import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { ExtraneousDependencySuite } from "./ExtraneousDependencySuite";

export let NoExtraneousDependencies = new ExtraneousDependencySuite(
    ESLintRule.ImportNoExtraneousDependencies,
    [
        {
            Description: "Checking whether extraneous dependencies are disallowed…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.All,
            CodeSnippets: [
                {
                    Valid: false,
                    Snippets: [
                        `import "${ExtraneousDependencySuite.ExtraneousDependency}"`
                    ]
                },
                {
                    Valid: true,
                    Snippets: [
                        'import path = require("path");'
                    ]
                }
            ]
        }
    ]);
