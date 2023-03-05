import { basename } from "node:path";
import { NoUnpublishedImport } from "./NoUnpublishedImport.test.js";
import { NoUnpublishedRequire } from "./NoUnpublishedRequire.test.js";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";

/**
 * Provides tests for node-rules.
 */
export let NodeTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        NoUnpublishedRequire,
        NoUnpublishedImport
    ]);
