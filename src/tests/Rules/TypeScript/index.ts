import { SuiteContainer } from "../../Debugging/SuiteContainer";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures";

export let TypeScriptTests = new SuiteContainer(
    "TypeScript",
    [
        AdjacentOverloadSignatures
    ]);
