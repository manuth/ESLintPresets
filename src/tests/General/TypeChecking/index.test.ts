import { RegisterableContainer } from "../../Debugging/RegisterableContainer.js";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer.js";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.js";
import { TypeCheckingSuite } from "./TypeCheckingSuite.js";

let suite = new TypeCheckingSuite();

/**
 * Provides tests for type-checking.
 */
export let TypeCheckingTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
