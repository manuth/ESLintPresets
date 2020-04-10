import { LintSuite } from "../LintSuite";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests: LintSuite[] = [
    ...TypeScriptTests
];
