import { basename } from "path";
import { ArrayBracketNewLine } from "./ArrayBracketNewLine.test.js";
import { ArrayBracketSpacing } from "./ArrayBracketSpacing.test.js";
import { ArrayElementNewLine } from "./ArrayElementNewLine.test.js";
import { ArrowParens } from "./ArrowParens.test.js";
import { ArrowSpacing } from "./ArrowSpacing.test.js";
import { BlockSpacing } from "./BlockSpacing.test.js";
import { BraceStyle } from "./BraceStyle.test.js";
import { CommaDangle } from "./CommaDangle.test.js";
import { CommaStyle } from "./CommaStyle.test.js";
import { Complexity } from "./Complexity.test.js";
import { ComputedPropertySpacing } from "./ComputedPropertySpacing.test.js";
import { Curly } from "./Curly.test.js";
import { DotNotation } from "./DotNotation.test.js";
import { EOLLast } from "./EOLLast.test.js";
import { EQEQEQ } from "./EQEQEQ.test.js";
import { FunctionCallArgumentNewLine } from "./FunctionCallArgumentNewLine.test.js";
import { GeneratorStarSpacing } from "./GeneratorStarSpacing.test.js";
import { GuardForIn } from "./GuardForIn.test.js";
import { LinesBetweenClassMembers } from "./LinesBetweenClassMembers.test.js";
import { MaxClassesPerFile } from "./MaxClassesPerFile.test.js";
import { MaxLen } from "./MaxLen.test.js";
import { MultilineTernary } from "./MultilineTernary.test.js";
import { NewParens } from "./NewParens.test.js";
import { NoAsyncPromiseExecutor } from "./NoAsyncPromiseExecutor.test.js";
import { NoBitwise } from "./NoBitwise.test.js";
import { NoCaller } from "./NoCaller.test.js";
import { NoCaseDeclarations } from "./NoCaseDeclarations.test.js";
import { NoCondAssign } from "./NoCondAssign.test.js";
import { NoConsole } from "./NoConsole.test.js";
import { NoConstantCondition } from "./NoConstantCondition.test.js";
import { NoConstructorReturn } from "./NoConstructorReturn.test.js";
import { NoControlRegex } from "./NoControlRegex.test.js";
import { NoDebugger } from "./NoDebugger.test.js";
import { NoDuplicateCase } from "./NoDuplicateCase.test.js";
import { NoEmpty } from "./NoEmpty.test.js";
import { NoEmptyPattern } from "./NoEmptyPattern.test.js";
import { NoEval } from "./NoEval.test.js";
import { NoFallthrough } from "./NoFallthrough.test.js";
import { NoFloatingDecimal } from "./NoFloatingDecimal.test.js";
import { NoImplicitCoercion } from "./NoImplicitCoercion.test.js";
import { NoInnerDeclarations } from "./NoInnerDeclarations.test.js";
import { NoInvalidThis } from "./NoInvalidThis.test.js";
import { NoLonelyIf } from "./NoLonelyIf.test.js";
import { NoMultipleEmptyLines } from "./NoMultipleEmptyLines.test.js";
import { NoMultiSpaces } from "./NoMultiSpaces.test.js";
import { NoNewWrappers } from "./NoNewWrappers.test.js";
import { NoOctalEscape } from "./NoOctalEscape.test.js";
import { NoRegexSpaces } from "./NoRegexSpaces.test.js";
import { NoReturnAwait } from "./NoReturnAwait.test.js";
import { NoSequences } from "./NoSequences.test.js";
import { NoShadow } from "./NoShadow.test.js";
import { NoSparseArrays } from "./NoSparseArrays.test.js";
import { NoThrowLiteral } from "./NoThrowLiteral.test.js";
import { NoTrailingSpaces } from "./NoTrailingSpaces.test.js";
import { NoUndefInit } from "./NoUndefInit.test.js";
import { NoUnsafeFinally } from "./NoUnsafeFinally.test.js";
import { NoUnusedLabels } from "./NoUnusedLabels.test.js";
import { NoUselessCatch } from "./NoUselessCatch.test.js";
import { NoUselessRename } from "./NoUselessRename.test.js";
import { NoVar } from "./NoVar.test.js";
import { NoVoid } from "./NoVoid.test.js";
import { NoWhitespaceBeforeProperty } from "./NoWhitespaceBeforeProperty.test.js";
import { ObjectCurlyNewLine } from "./ObjectCurlyNewLine.test.js";
import { ObjectCurlySpacing } from "./ObjectCurlySpacing.test.js";
import { ObjectPropertyNewLine } from "./ObjectPropertyNewLine.test.js";
import { ObjectShorthand } from "./ObjectShorthand.test.js";
import { OneVar } from "./OneVar.test.js";
import { OperatorLineBreak } from "./OperatorLineBreak.test.js";
import { PaddedBlocks } from "./PaddedBlocks.test.js";
import { PaddingLineBetweenStatements } from "./PaddingLineBetweenStatements.test.js";
import { PreferConst } from "./PreferConst.test.js";
import { PreferObjectSpread } from "./PreferObjectSpread.test.js";
import { PreferRestParams } from "./PreferRestParams.test.js";
import { PreferSpread } from "./PreferSpread.test.js";
import { QuoteProps } from "./QuoteProps.test.js";
import { RestSpreadSpacing } from "./RestSpreadSpacing.test.js";
import { SemiSpacing } from "./SemiSpacing.test.js";
import { SemiStyle } from "./SemiStyle.test.js";
import { SpaceBeforeBlocks } from "./SpaceBeforeBlocks.test.js";
import { SpacedComment } from "./SpacedComment.test.js";
import { SpaceInfixOPs } from "./SpaceInfixOPs.test.js";
import { SpaceInParens } from "./SpaceInParens.test.js";
import { SpaceUnaryOPs } from "./SpaceUnaryOPs.test.js";
import { SwitchColonSpacing } from "./SwitchColonSpacing.test.js";
import { TemplateCurlySpacing } from "./TemplateCurlySpacing.test.js";
import { UseIsNaN } from "./UseIsNaN.test.js";
import { ValidTypeof } from "./ValidTypeof.test.js";
import { YieldStarSpacing } from "./YieldStarSpacing.test.js";
import { Yoda } from "./Yoda.test.js";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";

/**
 * Provides tests for core-rules.
 */
export let CoreTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        ArrayBracketSpacing,
        ArrayBracketNewLine,
        ArrayElementNewLine,
        ArrowParens,
        ArrowSpacing,
        BlockSpacing,
        BraceStyle,
        CommaDangle,
        CommaStyle,
        Complexity,
        ComputedPropertySpacing,
        Curly,
        DotNotation,
        EOLLast,
        EQEQEQ,
        FunctionCallArgumentNewLine,
        GeneratorStarSpacing,
        GuardForIn,
        LinesBetweenClassMembers,
        MaxClassesPerFile,
        MaxLen,
        MultilineTernary,
        NewParens,
        NoAsyncPromiseExecutor,
        NoBitwise,
        NoCaller,
        NoCaseDeclarations,
        NoCondAssign,
        NoConsole,
        NoConstantCondition,
        NoConstructorReturn,
        NoControlRegex,
        NoDebugger,
        NoDuplicateCase,
        NoEmpty,
        NoEmptyPattern,
        NoEval,
        NoFallthrough,
        NoFloatingDecimal,
        NoImplicitCoercion,
        NoInnerDeclarations,
        NoInvalidThis,
        NoLonelyIf,
        NoMultipleEmptyLines,
        NoMultiSpaces,
        NoNewWrappers,
        NoOctalEscape,
        NoRegexSpaces,
        NoReturnAwait,
        NoSequences,
        NoShadow,
        NoSparseArrays,
        NoThrowLiteral,
        NoTrailingSpaces,
        NoUndefInit,
        NoUnsafeFinally,
        NoUnusedLabels,
        NoUselessCatch,
        NoUselessRename,
        NoVar,
        NoVoid,
        NoWhitespaceBeforeProperty,
        ObjectCurlyNewLine,
        ObjectCurlySpacing,
        ObjectPropertyNewLine,
        ObjectShorthand,
        OneVar,
        OperatorLineBreak,
        PaddedBlocks,
        PaddingLineBetweenStatements,
        PreferConst,
        PreferObjectSpread,
        PreferRestParams,
        PreferSpread,
        QuoteProps,
        RestSpreadSpacing,
        SemiSpacing,
        SemiStyle,
        SpaceBeforeBlocks,
        SpaceInParens,
        SpaceInfixOPs,
        SpaceUnaryOPs,
        SpacedComment,
        SwitchColonSpacing,
        TemplateCurlySpacing,
        UseIsNaN,
        ValidTypeof,
        YieldStarSpacing,
        Yoda
    ]);
