import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import { DeprecatedRulesTests } from "./Deprecated";
import { TypeCheckingTests } from "./TypeChecking";

/**
 * Provides general tests.
 */
export let GeneralTests = new ContainerSuite(
    "General",
    [
        TypeCheckingTests,
        DeprecatedRulesTests
    ]);
