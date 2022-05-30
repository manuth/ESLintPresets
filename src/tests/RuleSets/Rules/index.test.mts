import { basename } from "path";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.mjs";
import { CoreTests } from "./Core/index.test.mjs";
import { DeprecationTests } from "./Deprecation/index.test.mjs";
import { ImportTests } from "./Import/index.test.mjs";
import { JSDocTests } from "./JSDoc/index.test.mjs";
import { NodeTests } from "./Node/index.test.mjs";
import { TypeScriptTests } from "./TypeScript/index.test.mjs";

/**
 * Provides tests for rules.
 */
export let RuleTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        TypeScriptTests,
        CoreTests,
        ImportTests,
        JSDocTests,
        DeprecationTests,
        NodeTests
    ]);
