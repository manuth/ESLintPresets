import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { NoUnpublishedImport } from "./NoUnpublishedImport.test.mjs";
import { NoUnpublishedRequire } from "./NoUnpublishedRequire.test.mjs";

/**
 * Provides tests for node-rules.
 */
export let NodeTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        NoUnpublishedRequire,
        NoUnpublishedImport
    ]);
