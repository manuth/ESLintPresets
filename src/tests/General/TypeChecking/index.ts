import { ContainerSuite } from "../../Debugging/Suites/ContainerSuite";
import { TypeCheckingSuite } from "./TypeCheckingSuite";

export = new ContainerSuite(
    "TypeChecking",
    [
        new TypeCheckingSuite()
    ]);
