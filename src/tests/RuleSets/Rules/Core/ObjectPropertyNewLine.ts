import { RuleSet } from "../../../Debugging/RuleSet";
import { ScriptKind } from "../../../Debugging/ScriptKind";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";

export let ObjectPropertyNewLine = new RuleSuite(
    "object-property-newline",
    [
        {
            Description: "Checking whether new-lines between object-properties must be consistent…",
            RuleSet: RuleSet.All,
            ScriptKind: ScriptKind.JS | ScriptKind.TS,
            CodeSnippets: []
        }
    ]);
