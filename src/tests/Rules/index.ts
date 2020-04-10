import { LintSuite } from "../Debugging/LintSuite";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests: LintSuite[] = [
    ...TypeScriptTests
];
