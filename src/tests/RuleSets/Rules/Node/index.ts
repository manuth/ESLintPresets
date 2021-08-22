import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { NoUnpublishedImport } from "./NoUnpublishedImport.test";
import { NoUnpublishedRequire } from "./NoUnpublishedRequire.test";

/**
 * Provides tests for node-rules.
 */
export let NodeTests = new ContainerSuite(
    basename(__dirname),
    [
        NoUnpublishedRequire,
        NoUnpublishedImport
    ]);
