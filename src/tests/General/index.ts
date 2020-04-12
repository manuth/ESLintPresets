import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import { DeprecatedRulesTests } from "./Deprecated";
import { TypeCheckingTests } from "./TypeChecking";

export let GeneralTests = new ContainerSuite(
    "General",
    [
        TypeCheckingTests,
        DeprecatedRulesTests
    ]);
