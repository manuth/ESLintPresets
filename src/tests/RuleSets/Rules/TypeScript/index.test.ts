import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";
import { AdjacentOverloadSignatures } from "./AdjacentOverloadSignatures.test.js";
import { ArrayType } from "./ArrayType.test.js";
import { AwaitThenable } from "./AwaitThenable.test.js";
import { BanTSIgnore } from "./BanTSIgnore.test.js";
import { BanTypes } from "./BanTypes.test.js";
import { CommaSpacing } from "./CommaSpacing.test.js";
import { ConsistentTypeAssertions } from "./ConsistentTypeAssertions.test.js";
import { ConsistentTypeDefinitions } from "./ConsistentTypeDefinitions.test.js";
import { DefaultParamLast } from "./DefaultParamLast.test.js";
import { ExplicitFunctionReturnType } from "./ExplicitFunctionReturnType.test.js";
import { ExplicitMemberAccessibility } from "./ExplicitMemberAccessibility.test.js";
import { FuncCallSpacing } from "./FuncCallSpacing.test.js";
import { MemberDelimiterStyle } from "./MemberDelimiterStyle.test.js";
import { MemberOrdering } from "./MemberOrdering/index.test.js";
import { NamingConvention } from "./NamingConvention.test.js";
import { NoDynamicDelete } from "./NoDynamicDelete.test.js";
import { NoEmptyFunction } from "./NoEmptyFunction.test.js";
import { NoEmptyInterface } from "./NoEmptyInterface.test.js";
import { NoExplicitAny } from "./NoExplicitAny.test.js";
import { NoFloatingPromises } from "./NoFloatingPromises.test.js";
import { NoForInArray } from "./NoForInArray.test.js";
import { NoInferrableTypes } from "./NoInferrableTypes.test.js";
import { NoMisusedNew } from "./NoMisusedNew.test.js";
import { NoNamespace } from "./NoNamespace.test.js";
import { NoThisAlias } from "./NoThisAlias.test.js";
import { NoUnusedExpressions } from "./NoUnusedExpressions.test.js";
import { NoUnusedVars } from "./NoUnusedVars.test.js";
import { NoUseBeforeDefine } from "./NoUseBeforeDefine.test.js";
import { NoVarRequires } from "./NoVarRequires.test.js";
import { ParameterProperties } from "./ParameterProperties.test.js";
import { PreferAsConst } from "./PreferAsConst.test.js";
import { PreferForOf } from "./PreferForOf.test.js";
import { PreferFunctionType } from "./PreferFunctionType.test.js";
import { PreferNamespaceKeyword } from "./PreferNamespaceKeyword.test.js";
import { PreferOptionalChain } from "./PreferOptionalChain.test.js";
import { Quotes } from "./Quotes.test.js";
import { Semi } from "./Semi.test.js";
import { SpaceBeforeFunctionParen } from "./SpaceBeforeFunctionParen.test.js";
import { TripleSlashReference } from "./TripleSlashReference.test.js";
import { TSLintTests } from "./TSLint/index.test.js";
import { TypeAnnotationSpacing } from "./TypeAnnotationSpacing.test.js";
import { UnboundMethod } from "./UnboundMethod.test.js";
import { UnifiedSignatures } from "./UnifiedSignatures.test.js";

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
