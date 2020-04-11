import { ContainerSuite } from "../Debugging/Suites/ContainerSuite";
import TypeChecking = require("./TypeChecking");

export = new ContainerSuite(
    "General",
    [
        TypeChecking
    ]);
