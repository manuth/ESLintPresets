import { RegisterableContainer } from "../../Debugging/RegisterableContainer.mjs";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer.mjs";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite.mjs";
import { DeprecatedSuite } from "./DeprecatedSuite.mjs";

let suite = new DeprecatedSuite();

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecatedRulesTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
