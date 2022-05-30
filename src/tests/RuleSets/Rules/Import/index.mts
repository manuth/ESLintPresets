import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { NewLineAfterImport } from "./NewLineAfterImport.test.mjs";
import { NoDefaultExport } from "./NoDefaultExport.test.mjs";
import { NoDuplicates } from "./NoDuplicates.test.mjs";
import { NoExtraneousDependencies } from "./NoExtraneousDependencies.test.mjs";
import { Order } from "./Order.test.mjs";

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
