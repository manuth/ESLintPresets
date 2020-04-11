import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures";

export let TypeScriptTests = new ContainerSuite(
    "TypeScript",
    [
        AdjacentOverloadSignatures
    ]);
