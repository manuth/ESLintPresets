import { basename } from "node:path";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.js";
import { CoreTests } from "./Core/index.test.js";
import { DeprecationTests } from "./Deprecation/index.test.js";
import { ESLintCommentTests } from "./ESLintComments/index.test.js";
import { ImportTests } from "./Import/index.test.js";
import { JSDocTests } from "./JSDoc/index.test.js";
import { NodeTests } from "./Node/index.test.js";
import { TypeScriptTests } from "./TypeScript/index.test.js";

/**
 * Provides tests for rules.
 */
export let RuleTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        TypeScriptTests,
        CoreTests,
        ESLintCommentTests,
        ImportTests,
        JSDocTests,
        DeprecationTests,
        NodeTests
    ]);
