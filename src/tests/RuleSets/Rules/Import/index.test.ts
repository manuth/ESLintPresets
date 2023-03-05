import { basename } from "node:path";
import { NewLineAfterImport } from "./NewLineAfterImport.test.js";
import { NoDefaultExport } from "./NoDefaultExport.test.js";
import { NoDuplicates } from "./NoDuplicates.test.js";
import { NoExtraneousDependencies } from "./NoExtraneousDependencies.test.js";
import { Order } from "./Order.test.js";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";

/**
 * Provides tests for import-rules.
 */
export let ImportTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        NewLineAfterImport,
        NoDefaultExport,
        NoDuplicates,
        NoExtraneousDependencies,
        Order
    ]);
