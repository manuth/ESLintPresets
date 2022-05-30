import { basename } from "path";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.mjs";
import { CoreTests } from "./Core/index.mjs";
import { DeprecationTests } from "./Deprecation/index.mjs";
import { ImportTests } from "./Import/index.mjs";
import { JSDocTests } from "./JSDoc/index.mjs";
import { NodeTests } from "./Node/index.mjs";
import { TypeScriptTests } from "./TypeScript/index.mjs";

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
