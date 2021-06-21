import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { NoUnpublishedImport } from "./NoUnpublishedImport.test";
import { NoUnpublishedRequire } from "./NoUnpublishedRequire.test";

export let NodeTests = new ContainerSuite(
    "Node",
    [
        NoUnpublishedRequire,
        NoUnpublishedImport
    ]);
