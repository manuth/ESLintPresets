import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures.test";
import { ArrayType } from "./ArrayType.test";
import { AwaitThenable } from "./AwaitThenable.test";
import { BanTSIgnore } from "./BanTSIgnore.test";
import { BanTypes } from "./BanTypes.test";
import { CommaSpacing } from "./CommaSpacing.test";
import { ConsistentTypeAssertions } from "./ConsistentTypeAssertions.test";
import { ConsistentTypeDefinitions } from "./ConsistentTypeDefinitions.test";
import { DefaultParamLast } from "./DefaultParamLast.test";
import { ExplicitFunctionReturnType } from "./ExplicitFunctionReturnType.test";
import { ExplicitMemberAccessibility } from "./ExplicitMemberAccessibility.test";
import { FuncCallSpacing } from "./FuncCallSpacing.test";
import { MemberDelimiterStyle } from "./MemberDelimiterStyle.test";
import { MemberOrdering } from "./MemberOrdering";
import { NamingConvention } from "./NamingConvention.test";
import { NoDynamicDelete } from "./NoDynamicDelete.test";
import { NoEmptyFunction } from "./NoEmptyFunction.test";
import { NoEmptyInterface } from "./NoEmptyInterface.test";
import { NoExplicitAny } from "./NoExplicitAny.test";
import { NoFloatingPromises } from "./NoFloatingPromises.test";
import { NoForInArray } from "./NoForInArray.test";
import { NoInferrableTypes } from "./NoInferrableTypes.test";
import { NoMisusedNew } from "./NoMisusedNew.test";
import { NoNamespace } from "./NoNamespace.test";
import { NoThisAlias } from "./NoThisAlias.test";
import { NoUnusedExpressions } from "./NoUnusedExpressions.test";
import { NoUnusedVars } from "./NoUnusedVars.test";
import { NoUseBeforeDefine } from "./NoUseBeforeDefine.test";
import { NoVarRequires } from "./NoVarRequires.test";
import { ParameterProperties } from "./ParameterProperties.test";
import { PreferAsConst } from "./PreferAsConst.test";
import { PreferForOf } from "./PreferForOf.test";
import { PreferFunctionType } from "./PreferFunctionType.test";
import { PreferNamespaceKeyword } from "./PreferNamespaceKeyword.test";
import { PreferOptionalChain } from "./PreferOptionalChain.test";
import { Quotes } from "./Quotes.test";
import { Semi } from "./Semi.test";
import { SpaceBeforeFunctionParen } from "./SpaceBeforeFunctionParen.test";
import { TripleSlashReference } from "./TripleSlashReference.test";
import { TSLintTests } from "./TSLint";
import { TypeAnnotationSpacing } from "./TypeAnnotationSpacing.test";
import { UnboundMethod } from "./UnboundMethod.test";
import { UnifiedSignatures } from "./UnifiedSignatures.test";

/**
 * Provides tests for typescript-related rules.
 */
export let TypeScriptTests = new ContainerSuite(
    basename(__dirname),
    [
        AdjacentOverloadSignatures,
        ArrayType,
        AwaitThenable,
        BanTSIgnore,
        BanTypes,
        CommaSpacing,
        ConsistentTypeAssertions,
        ConsistentTypeDefinitions,
        DefaultParamLast,
        ExplicitFunctionReturnType,
        ExplicitMemberAccessibility,
        FuncCallSpacing,
        MemberDelimiterStyle,
        MemberOrdering,
        NamingConvention,
        NoDynamicDelete,
        NoEmptyFunction,
        NoEmptyInterface,
        NoExplicitAny,
        NoFloatingPromises,
        NoForInArray,
        NoInferrableTypes,
        NoMisusedNew,
        NoNamespace,
        NoThisAlias,
        NoUnusedExpressions,
        NoUnusedVars,
        NoUseBeforeDefine,
        NoVarRequires,
        ParameterProperties,
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
        UnifiedSignatures,
        TSLintTests
    ]);
