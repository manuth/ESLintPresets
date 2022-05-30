import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures.test.mjs";
import { ArrayType } from "./ArrayType.test.mjs";
import { AwaitThenable } from "./AwaitThenable.test.mjs";
import { BanTSIgnore } from "./BanTSIgnore.test.mjs";
import { BanTypes } from "./BanTypes.test.mjs";
import { CommaSpacing } from "./CommaSpacing.test.mjs";
import { ConsistentTypeAssertions } from "./ConsistentTypeAssertions.test.mjs";
import { ConsistentTypeDefinitions } from "./ConsistentTypeDefinitions.test.mjs";
import { DefaultParamLast } from "./DefaultParamLast.test.mjs";
import { ExplicitFunctionReturnType } from "./ExplicitFunctionReturnType.test.mjs";
import { ExplicitMemberAccessibility } from "./ExplicitMemberAccessibility.test.mjs";
import { FuncCallSpacing } from "./FuncCallSpacing.test.mjs";
import { MemberDelimiterStyle } from "./MemberDelimiterStyle.test.mjs";
import { MemberOrdering } from "./MemberOrdering/index.test.mjs";
import { NamingConvention } from "./NamingConvention.test.mjs";
import { NoDynamicDelete } from "./NoDynamicDelete.test.mjs";
import { NoEmptyFunction } from "./NoEmptyFunction.test.mjs";
import { NoEmptyInterface } from "./NoEmptyInterface.test.mjs";
import { NoExplicitAny } from "./NoExplicitAny.test.mjs";
import { NoFloatingPromises } from "./NoFloatingPromises.test.mjs";
import { NoForInArray } from "./NoForInArray.test.mjs";
import { NoInferrableTypes } from "./NoInferrableTypes.test.mjs";
import { NoMisusedNew } from "./NoMisusedNew.test.mjs";
import { NoNamespace } from "./NoNamespace.test.mjs";
import { NoThisAlias } from "./NoThisAlias.test.mjs";
import { NoUnusedExpressions } from "./NoUnusedExpressions.test.mjs";
import { NoUnusedVars } from "./NoUnusedVars.test.mjs";
import { NoUseBeforeDefine } from "./NoUseBeforeDefine.test.mjs";
import { NoVarRequires } from "./NoVarRequires.test.mjs";
import { ParameterProperties } from "./ParameterProperties.test.mjs";
import { PreferAsConst } from "./PreferAsConst.test.mjs";
import { PreferForOf } from "./PreferForOf.test.mjs";
import { PreferFunctionType } from "./PreferFunctionType.test.mjs";
import { PreferNamespaceKeyword } from "./PreferNamespaceKeyword.test.mjs";
import { PreferOptionalChain } from "./PreferOptionalChain.test.mjs";
import { Quotes } from "./Quotes.test.mjs";
import { Semi } from "./Semi.test.mjs";
import { SpaceBeforeFunctionParen } from "./SpaceBeforeFunctionParen.test.mjs";
import { TripleSlashReference } from "./TripleSlashReference.test.mjs";
import { TSLintTests } from "./TSLint/index.test.mjs";
import { TypeAnnotationSpacing } from "./TypeAnnotationSpacing.test.mjs";
import { UnboundMethod } from "./UnboundMethod.test.mjs";
import { UnifiedSignatures } from "./UnifiedSignatures.test.mjs";

/**
 * Provides tests for typescript-related rules.
 */
export let TypeScriptTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
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
