import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";
import { Deprecation } from "./Deprecation.test.js";

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecationTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        Deprecation
    ]);
