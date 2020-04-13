import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures";
import { ArrayType } from "./ArrayType";
import { BanTSIgnore } from "./BanTSIgnore";
import { BanTypes } from "./BanTypes";
import { CommaSpacing } from "./CommaSpacing";
import { ConsistentTypeAssertions } from "./ConsistentTypeAssertions";
import { ConsistentTypeDefinitions } from "./ConsistentTypeDefinitions";
import { DefaultParamLast } from "./DefaultParamLast";
import { ExplicitFunctionReturnType } from "./ExplicitFunctionReturnType";
import { FuncCallSpacing } from "./FuncCallSpacing";
import { MemberDelimiterStyle } from "./MemberDelimiterStyle";
import { MemberOrdering } from "./MemberOrdering";

export let TypeScriptTests = new ContainerSuite(
    "TypeScript",
    [
        AdjacentOverloadSignatures,
        ArrayType,
        BanTSIgnore,
        BanTypes,
        CommaSpacing,
        ConsistentTypeAssertions,
        ConsistentTypeDefinitions,
        DefaultParamLast,
        ExplicitFunctionReturnType,
        FuncCallSpacing,
        MemberDelimiterStyle,
        MemberOrdering
    ]);
