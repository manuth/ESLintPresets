import { basename } from "node:path";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite.mjs";
import { DeprecatedRulesTests } from "./Deprecated/index.test.mjs";
import { TypeCheckingTests } from "./TypeChecking/index.test.mjs";

/**
 * Provides general tests.
 */
export let GeneralTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        TypeCheckingTests,
        DeprecatedRulesTests
    ]);
