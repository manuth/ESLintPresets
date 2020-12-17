import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { Deprecation } from "./Deprecation";

export let DeprecationTests = new ContainerSuite(
    "Deprecation",
    [
        Deprecation
    ]);
