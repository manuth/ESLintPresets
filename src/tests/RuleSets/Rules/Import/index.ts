import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { NoDefaultExport } from "./NoDefaultExport";
import { NoDuplicates } from "./NoDuplicates";
import { Order } from "./Order";

export let ImportTests = new ContainerSuite(
    "Import",
    [
        NoDefaultExport,
        NoDuplicates,
        Order
    ]);
