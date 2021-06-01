import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { Deprecation } from "./Deprecation.test";

export let DeprecationTests = new ContainerSuite(
    "Deprecation",
    [
        Deprecation
    ]);
