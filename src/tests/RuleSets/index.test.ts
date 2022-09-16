import { basename } from "node:path";
import { RuleSetContainer } from "../Debugging/RuleSetContainer.js";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite.js";
import { RuleTests } from "./Rules/index.test.js";

/**
 * Provides tests for rule-sets.
 */
export let RuleSetsTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        new RuleSetContainer(RuleTests)
    ]);
