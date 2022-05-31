import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { Deprecation } from "./Deprecation.test.mjs";

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecationTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        Deprecation
    ]);
