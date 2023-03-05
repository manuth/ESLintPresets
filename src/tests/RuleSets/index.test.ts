import { basename } from "node:path";
import { RuleTests } from "./Rules/index.test.js";
import { RuleSetContainer } from "../Debugging/RuleSetContainer.js";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite.js";

/**
 * Provides tests for rule-sets.
 */
export let RuleSetsTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        new RuleSetContainer(RuleTests)
    ]);
