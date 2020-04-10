import { SuiteContainer } from "../Debugging/SuiteContainer";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests = new SuiteContainer(
    "Rules",
    [
        TypeScriptTests
    ]);
