import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { CoreTests } from "./Core";
import { DeprecationTests } from "./Deprecation";
import { ImportTests } from "./Import";
import { JSDocTests } from "./JSDoc";
import { TypeScriptTests } from "./TypeScript";

export let RuleTests = new ContainerSuite(
    "Rules",
    [
        TypeScriptTests,
        CoreTests,
        ImportTests,
        JSDocTests,
        DeprecationTests
    ]);
