import { RegisterableContainer } from "../../Debugging/RegisterableContainer";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { TypeCheckingSuite } from "./TypeCheckingSuite";

let suite = new TypeCheckingSuite();

/**
 * Provides tests for type-checking.
 */
export let TypeCheckingTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
