import { SuiteContainer } from "../../Debugging/Suites/SuiteContainer";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures";

export let TypeScriptTests = new SuiteContainer(
    "TypeScript",
    [
        AdjacentOverloadSignatures
    ]);
