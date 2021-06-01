import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { NoDefaultExport } from "./NoDefaultExport.test";
import { NoDuplicates } from "./NoDuplicates.test";
import { Order } from "./Order.test";

export let ImportTests = new ContainerSuite(
    "Import",
    [
        NoDefaultExport,
        NoDuplicates,
        Order
    ]);
