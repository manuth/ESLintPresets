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
import { NoInferrableTypes } from "./NoInferrableTypes";
import { NoMisusedNew } from "./NoMisusedNew";
import { NoNamespace } from "./NoNamespace";
import { NoParameterProperties } from "./NoParameterProperties";
import { NoThisAlias } from "./NoThisAlias";
import { NoUnusedExpressions } from "./NoUnusedExpressions";
import { NoUnusedVars } from "./NoUnusedVars";
import { NoUseBeforeDefine } from "./NoUseBeforeDefine";
import { NoVarRequires } from "./NoVarRequires";
import { PreferAsConst } from "./PreferAsConst";
import { PreferForOf } from "./PreferForOf";
import { PreferFunctionType } from "./PreferFunctionType";
import { PreferNamespaceKeyword } from "./PreferNamespaceKeyword";
import { PreferOptionalChain } from "./PreferOptionalChain";
import { Quotes } from "./Quotes";
import { Semi } from "./Semi";
import { SpaceBeforeFunctionParen } from "./SpaceBeforeFunctionParen";
import { TripleSlashReference } from "./TripleSlashReference";
import { TypeAnnotationSpacing } from "./TypeAnnotationSpacing";
import { UnboundMethod } from "./UnboundMethod";
import { UnifiedSignatures } from "./UnifiedSignatures";

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
        NoInferrableTypes,
        NoMisusedNew,
        NoNamespace,
        NoParameterProperties,
        NoThisAlias,
        NoUnusedExpressions,
        NoUnusedVars,
        NoUseBeforeDefine,
        NoVarRequires,
        PreferAsConst,
        PreferForOf,
        PreferFunctionType,
        PreferNamespaceKeyword,
        PreferOptionalChain,
        Quotes,
        Semi,
        SpaceBeforeFunctionParen,
        TripleSlashReference,
        TypeAnnotationSpacing,
        UnboundMethod,
        UnifiedSignatures
    ]);
