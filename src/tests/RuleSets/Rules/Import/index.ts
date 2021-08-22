import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { NewLineAfterImport } from "./NewLineAfterImport.test";
import { NoDefaultExport } from "./NoDefaultExport.test";
import { NoDuplicates } from "./NoDuplicates.test";
import { NoExtraneousDependencies } from "./NoExtraneousDependencies.test";
import { Order } from "./Order.test";

/**
 * Provides tests for import-rules.
 */
export let ImportTests = new ContainerSuite(
    basename(__dirname),
    [
        NewLineAfterImport,
        NoDefaultExport,
        NoDuplicates,
        NoExtraneousDependencies,
        Order
    ]);
