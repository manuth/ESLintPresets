import { SuiteContainer } from "../Debugging/Suites/SuiteContainer";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests = new SuiteContainer(
    "Rules",
    [
        TypeScriptTests
    ]);
