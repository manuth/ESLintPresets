import { basename } from "path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { ArrayBracketNewLine } from "./ArrayBracketNewLine.test.mjs";
import { ArrayBracketSpacing } from "./ArrayBracketSpacing.test.mjs";
import { ArrayElementNewLine } from "./ArrayElementNewLine.test.mjs";
import { ArrowParens } from "./ArrowParens.test.mjs";
import { ArrowSpacing } from "./ArrowSpacing.test.mjs";
import { BlockSpacing } from "./BlockSpacing.test.mjs";
import { BraceStyle } from "./BraceStyle.test.mjs";
import { CommaDangle } from "./CommaDangle.test.mjs";
import { CommaStyle } from "./CommaStyle.test.mjs";
import { Complexity } from "./Complexity.test.mjs";
import { ComputedPropertySpacing } from "./ComputedPropertySpacing.test.mjs";
import { Curly } from "./Curly.test.mjs";
import { DotNotation } from "./DotNotation.test.mjs";
import { EOLLast } from "./EOLLast.test.mjs";
import { EQEQEQ } from "./EQEQEQ.test.mjs";
import { FunctionCallArgumentNewLine } from "./FunctionCallArgumentNewLine.test.mjs";
import { GeneratorStarSpacing } from "./GeneratorStarSpacing.test.mjs";
import { GuardForIn } from "./GuardForIn.test.mjs";
import { LinesBetweenClassMembers } from "./LinesBetweenClassMembers.test.mjs";
import { MaxClassesPerFile } from "./MaxClassesPerFile.test.mjs";
import { MaxLen } from "./MaxLen.test.mjs";
import { MultilineTernary } from "./MultilineTernary.test.mjs";
import { NewParens } from "./NewParens.test.mjs";
import { NoAsyncPromiseExecutor } from "./NoAsyncPromiseExecutor.test.mjs";
import { NoBitwise } from "./NoBitwise.test.mjs";
import { NoCaller } from "./NoCaller.test.mjs";
import { NoCaseDeclarations } from "./NoCaseDeclarations.test.mjs";
import { NoCondAssign } from "./NoCondAssign.test.mjs";
import { NoConsole } from "./NoConsole.test.mjs";
import { NoConstantCondition } from "./NoConstantCondition.test.mjs";
import { NoConstructorReturn } from "./NoConstructorReturn.test.mjs";
import { NoControlRegex } from "./NoControlRegex.test.mjs";
import { NoDebugger } from "./NoDebugger.test.mjs";
import { NoDuplicateCase } from "./NoDuplicateCase.test.mjs";
import { NoEmpty } from "./NoEmpty.test.mjs";
import { NoEmptyPattern } from "./NoEmptyPattern.test.mjs";
import { NoEval } from "./NoEval.test.mjs";
import { NoFallthrough } from "./NoFallthrough.test.mjs";
import { NoFloatingDecimal } from "./NoFloatingDecimal.test.mjs";
import { NoImplicitCoercion } from "./NoImplicitCoercion.test.mjs";
import { NoInnerDeclarations } from "./NoInnerDeclarations.test.mjs";
import { NoInvalidThis } from "./NoInvalidThis.test.mjs";
import { NoLonelyIf } from "./NoLonelyIf.test.mjs";
import { NoMultipleEmptyLines } from "./NoMultipleEmptyLines.test.mjs";
import { NoMultiSpaces } from "./NoMultiSpaces.test.mjs";
import { NoNewWrappers } from "./NoNewWrappers.test.mjs";
import { NoOctalEscape } from "./NoOctalEscape.test.mjs";
import { NoRegexSpaces } from "./NoRegexSpaces.test.mjs";
import { NoReturnAwait } from "./NoReturnAwait.test.mjs";
import { NoSequences } from "./NoSequences.test.mjs";
import { NoShadow } from "./NoShadow.test.mjs";
import { NoSparseArrays } from "./NoSparseArrays.test.mjs";
import { NoThrowLiteral } from "./NoThrowLiteral.test.mjs";
import { NoTrailingSpaces } from "./NoTrailingSpaces.test.mjs";
import { NoUndefInit } from "./NoUndefInit.test.mjs";
import { NoUnsafeFinally } from "./NoUnsafeFinally.test.mjs";
import { NoUnusedLabels } from "./NoUnusedLabels.test.mjs";
import { NoUselessCatch } from "./NoUselessCatch.test.mjs";
import { NoUselessRename } from "./NoUselessRename.test.mjs";
import { NoVar } from "./NoVar.test.mjs";
import { NoVoid } from "./NoVoid.test.mjs";
import { NoWhitespaceBeforeProperty } from "./NoWhitespaceBeforeProperty.test.mjs";
import { ObjectCurlyNewLine } from "./ObjectCurlyNewLine.test.mjs";
import { ObjectCurlySpacing } from "./ObjectCurlySpacing.test.mjs";
import { ObjectPropertyNewLine } from "./ObjectPropertyNewLine.test.mjs";
import { ObjectShorthand } from "./ObjectShorthand.test.mjs";
import { OneVar } from "./OneVar.test.mjs";
import { OperatorLineBreak } from "./OperatorLineBreak.test.mjs";
import { PaddedBlocks } from "./PaddedBlocks.test.mjs";
import { PaddingLineBetweenStatements } from "./PaddingLineBetweenStatements.test.mjs";
import { PreferConst } from "./PreferConst.test.mjs";
import { PreferObjectSpread } from "./PreferObjectSpread.test.mjs";
import { PreferRestParams } from "./PreferRestParams.test.mjs";
import { PreferSpread } from "./PreferSpread.test.mjs";
import { QuoteProps } from "./QuoteProps.test.mjs";
import { RestSpreadSpacing } from "./RestSpreadSpacing.test.mjs";
import { SemiSpacing } from "./SemiSpacing.test.mjs";
import { SemiStyle } from "./SemiStyle.test.mjs";
import { SpaceBeforeBlocks } from "./SpaceBeforeBlocks.test.mjs";
import { SpacedComment } from "./SpacedComment.test.mjs";
import { SpaceInfixOPs } from "./SpaceInfixOPs.test.mjs";
import { SpaceInParens } from "./SpaceInParens.test.mjs";
import { SpaceUnaryOPs } from "./SpaceUnaryOPs.test.mjs";
import { SwitchColonSpacing } from "./SwitchColonSpacing.test.mjs";
import { TemplateCurlySpacing } from "./TemplateCurlySpacing.test.mjs";
import { UseIsNaN } from "./UseIsNaN.test.mjs";
import { ValidTypeof } from "./ValidTypeof.test.mjs";
import { YieldStarSpacing } from "./YieldStarSpacing.test.mjs";
import { Yoda } from "./Yoda.test.mjs";

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
