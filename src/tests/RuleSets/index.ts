import { RuleSetContainer } from "../Debugging/RuleSetContainer";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import { RuleTests } from "./Rules";

/**
 * Provides tests for rule-sets.
 */
export let RuleSetsTests = new ContainerSuite(
    "RuleSets",
    [
        new RuleSetContainer(RuleTests)
    ]);
