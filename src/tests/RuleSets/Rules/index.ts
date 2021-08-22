import { basename } from "path";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { CoreTests } from "./Core";
import { DeprecationTests } from "./Deprecation";
import { ImportTests } from "./Import";
import { JSDocTests } from "./JSDoc";
import { NodeTests } from "./Node";
import { TypeScriptTests } from "./TypeScript";

/**
 * Provides tests for rules.
 */
export let RuleTests = new ContainerSuite(
    basename(__dirname),
    [
        TypeScriptTests,
        CoreTests,
        ImportTests,
        JSDocTests,
        DeprecationTests,
        NodeTests
    ]);
