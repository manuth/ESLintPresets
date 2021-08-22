import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { ArrayBracketNewLine } from "./ArrayBracketNewLine.test";
import { ArrayBracketSpacing } from "./ArrayBracketSpacing.test";
import { ArrayElementNewLine } from "./ArrayElementNewLine.test";
import { ArrowParens } from "./ArrowParens.test";
import { ArrowSpacing } from "./ArrowSpacing.test";
import { BlockSpacing } from "./BlockSpacing.test";
import { BraceStyle } from "./BraceStyle.test";
import { CommaDangle } from "./CommaDangle.test";
import { CommaStyle } from "./CommaStyle.test";
import { Complexity } from "./Complexity.test";
import { ComputedPropertySpacing } from "./ComputedPropertySpacing.test";
import { Curly } from "./Curly.test";
import { DotNotation } from "./DotNotation.test";
import { EOLLast } from "./EOLLast.test";
import { EQEQEQ } from "./EQEQEQ.test";
import { FunctionCallArgumentNewLine } from "./FunctionCallArgumentNewLine.test";
import { GeneratorStarSpacing } from "./GeneratorStarSpacing.test";
import { GuardForIn } from "./GuardForIn.test";
import { LinesBetweenClassMembers } from "./LinesBetweenClassMembers.test";
import { MaxClassesPerFile } from "./MaxClassesPerFile.test";
import { MaxLen } from "./MaxLen.test";
import { MultilineTernary } from "./MultilineTernary.test";
import { NewParens } from "./NewParens.test";
import { NoAsyncPromiseExecutor } from "./NoAsyncPromiseExecutor.test";
import { NoBitwise } from "./NoBitwise.test";
import { NoCaller } from "./NoCaller.test";
import { NoCaseDeclarations } from "./NoCaseDeclarations.test";
import { NoCondAssign } from "./NoCondAssign.test";
import { NoConsole } from "./NoConsole.test";
import { NoConstantCondition } from "./NoConstantCondition.test";
import { NoConstructorReturn } from "./NoConstructorReturn.test";
import { NoControlRegex } from "./NoControlRegex.test";
import { NoDebugger } from "./NoDebugger.test";
import { NoDuplicateCase } from "./NoDuplicateCase.test";
import { NoEmpty } from "./NoEmpty.test";
import { NoEmptyPattern } from "./NoEmptyPattern.test";
import { NoEval } from "./NoEval.test";
import { NoFallthrough } from "./NoFallthrough.test";
import { NoFloatingDecimal } from "./NoFloatingDecimal.test";
import { NoImplicitCoercion } from "./NoImplicitCoercion.test";
import { NoInnerDeclarations } from "./NoInnerDeclarations.test";
import { NoInvalidThis } from "./NoInvalidThis.test";
import { NoLonelyIf } from "./NoLonelyIf.test";
import { NoMultipleEmptyLines } from "./NoMultipleEmptyLines.test";
import { NoMultiSpaces } from "./NoMultiSpaces.test";
import { NoNewWrappers } from "./NoNewWrappers.test";
import { NoOctalEscape } from "./NoOctalEscape.test";
import { NoRegexSpaces } from "./NoRegexSpaces.test";
import { NoReturnAwait } from "./NoReturnAwait.test";
import { NoSequences } from "./NoSequences.test";
import { NoShadow } from "./NoShadow.test";
import { NoSparseArrays } from "./NoSparseArrays.test";
import { NoThrowLiteral } from "./NoThrowLiteral.test";
import { NoTrailingSpaces } from "./NoTrailingSpaces.test";
import { NoUndefInit } from "./NoUndefInit.test";
import { NoUnsafeFinally } from "./NoUnsafeFinally.test";
import { NoUnusedLabels } from "./NoUnusedLabels.test";
import { NoUselessCatch } from "./NoUselessCatch.test";
import { NoUselessRename } from "./NoUselessRename.test";
import { NoVar } from "./NoVar.test";
import { NoVoid } from "./NoVoid.test";
import { NoWhitespaceBeforeProperty } from "./NoWhitespaceBeforeProperty.test";
import { ObjectCurlyNewLine } from "./ObjectCurlyNewLine.test";
import { ObjectCurlySpacing } from "./ObjectCurlySpacing.test";
import { ObjectPropertyNewLine } from "./ObjectPropertyNewLine.test";
import { ObjectShorthand } from "./ObjectShorthand.test";
import { OneVar } from "./OneVar.test";
import { OperatorLineBreak } from "./OperatorLineBreak.test";
import { PaddedBlocks } from "./PaddedBlocks.test";
import { PaddingLineBetweenStatements } from "./PaddingLineBetweenStatements.test";
import { PreferConst } from "./PreferConst.test";
import { PreferObjectSpread } from "./PreferObjectSpread.test";
import { PreferRestParams } from "./PreferRestParams.test";
import { PreferSpread } from "./PreferSpread.test";
import { QuoteProps } from "./QuoteProps.test";
import { RestSpreadSpacing } from "./RestSpreadSpacing.test";
import { SemiSpacing } from "./SemiSpacing.test";
import { SemiStyle } from "./SemiStyle.test";
import { SpaceBeforeBlocks } from "./SpaceBeforeBlocks.test";
import { SpacedComment } from "./SpacedComment.test";
import { SpaceInfixOPs } from "./SpaceInfixOPs.test";
import { SpaceInParens } from "./SpaceInParens.test";
import { SpaceUnaryOPs } from "./SpaceUnaryOPs.test";
import { SwitchColonSpacing } from "./SwitchColonSpacing.test";
import { TemplateCurlySpacing } from "./TemplateCurlySpacing.test";
import { UseIsNaN } from "./UseIsNaN.test";
import { ValidTypeof } from "./ValidTypeof.test";
import { YieldStarSpacing } from "./YieldStarSpacing.test";
import { Yoda } from "./Yoda.test";

/**
 * Provides tests for core-rules.
 */
export let CoreTests = new ContainerSuite(
    basename(__dirname),
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
