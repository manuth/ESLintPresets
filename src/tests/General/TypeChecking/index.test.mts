import { RegisterableContainer } from "../../Debugging/RegisterableContainer.mjs";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer.mjs";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.mjs";
import { TypeCheckingSuite } from "./TypeCheckingSuite.mjs";

let suite = new TypeCheckingSuite();

/**
 * Provides tests for type-checking.
 */
export let TypeCheckingTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
