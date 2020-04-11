import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests = new ContainerSuite(
    "Rules",
    [
        TypeScriptTests
    ]);
