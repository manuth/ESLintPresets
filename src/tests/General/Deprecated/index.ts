import { RegisterableContainer } from "../../Debugging/RegisterableContainer";
import { RuleSetContainer } from "../../Debugging/RuleSetContainer";
import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { DeprecatedSuite } from "./DeprecatedSuite";

let suite = new DeprecatedSuite();

/**
 * Provides tests for rule-deprecation.
 */
export let DeprecatedRulesTests = new ContainerSuite(
    suite.SuiteName,
    [
        new RuleSetContainer(new RegisterableContainer(suite.TestCases))
    ]);
