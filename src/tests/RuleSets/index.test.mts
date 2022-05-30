import { basename } from "path";
import { RuleSetContainer } from "../Debugging/RuleSetContainer.mjs";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite.mjs";
import { RuleTests } from "./Rules/index.test.mjs";

/**
 * Provides tests for rule-sets.
 */
export let RuleSetsTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        new RuleSetContainer(RuleTests)
    ]);
