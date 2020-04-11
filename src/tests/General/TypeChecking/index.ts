import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { TypeCheckingSuite } from "./TypeCheckingSuite";

export let TypeCheckingTests = new ContainerSuite(
    "TypeChecking",
    [
        new TypeCheckingSuite()
    ]);
