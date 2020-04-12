import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures";
import { ArrayType } from "./ArrayType";
import { BanTSIgnore } from "./BanTSIgnore";

export let TypeScriptTests = new ContainerSuite(
    "TypeScript",
    [
        AdjacentOverloadSignatures,
        ArrayType,
        BanTSIgnore
    ]);
