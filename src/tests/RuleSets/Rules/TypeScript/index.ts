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
import { NamingConvention } from "./NamingConvention";
import { NoDupeClassMembers } from "./NoDupeClassMembers";
import { NoDynamicDelete } from "./NoDynamicDelete";
import { NoEmptyFunction } from "./NoEmptyFunction";
import { NoEmptyInterface } from "./NoEmptyInterface";
import { NoExplicitAny } from "./NoExplicitAny";
import { NoFloatingPromises } from "./NoFloatingPromises";
import { NoForInArray } from "./NoForInArray";
import { NoMisusedNew } from "./NoMisusedNew";
import { NoNamespace } from "./NoNamespace";
import { NoParameterProperties } from "./NoParameterProperties";
import { NoThisAlias } from "./NoThisAlias";
import { NoUnusedExpressions } from "./NoUnusedExpressions";
import { NoUnusedVars } from "./NoUnusedVars";
import { NoUseBeforeDefine } from "./NoUseBeforeDefine";
import { NoVarRequires } from "./NoVarRequires";
import { PreferForOf } from "./PreferForOf";
import { PreferFunctionType } from "./PreferFunctionType";
import { PreferNamespaceKeyword } from "./PreferNamespaceKeyword";
import { PreferOptionalChain } from "./PreferOptionalChain";

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
        MemberOrdering,
        NamingConvention,
        NoDupeClassMembers,
        NoDynamicDelete,
        NoEmptyFunction,
        NoEmptyInterface,
        NoExplicitAny,
        NoFloatingPromises,
        NoForInArray,
        NoMisusedNew,
        NoNamespace,
        NoParameterProperties,
        NoThisAlias,
        NoUnusedExpressions,
        NoUnusedVars,
        NoUseBeforeDefine,
        NoVarRequires,
        PreferForOf,
        PreferFunctionType,
        PreferNamespaceKeyword,
        PreferOptionalChain
    ]);
