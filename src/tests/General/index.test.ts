import { basename } from "node:path";
import { DeprecatedRulesTests } from "./Deprecated/index.test.js";
import { TypeCheckingTests } from "./TypeChecking/index.test.js";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite.js";

/**
 * Provides general tests.
 */
export let GeneralTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        TypeCheckingTests,
        DeprecatedRulesTests
    ]);
