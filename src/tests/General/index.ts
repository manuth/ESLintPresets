import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import { TypeCheckingTests } from "./TypeChecking";

export let GeneralTests = new ContainerSuite(
    "General",
    [
        TypeCheckingTests
    ]);
