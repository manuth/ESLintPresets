import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { Deprecation } from "./Deprecation.test";

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecationTests = new ContainerSuite(
    basename(__dirname),
    [
        Deprecation
    ]);
