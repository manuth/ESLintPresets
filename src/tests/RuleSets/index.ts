import { RuleSetContainer } from "../Debugging/RuleSetContainer";
import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import { RuleTests } from "./Rules";

export = new ContainerSuite(
    "RuleSets",
    [
        new RuleSetContainer(RuleTests)
    ]);
