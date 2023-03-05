import { DeprecatedSuite } from "./DeprecatedSuite.js";
import { RegisterableContainer } from "../../Debugging/RegisterableContainer.js";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer.js";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.js";

let suite = new DeprecatedSuite();

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecatedRulesTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
