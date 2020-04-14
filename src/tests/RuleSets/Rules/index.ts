import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { CoreTests } from "./Core";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests = new ContainerSuite(
    "Rules",
    [
        TypeScriptTests,
        CoreTests
    ]);
