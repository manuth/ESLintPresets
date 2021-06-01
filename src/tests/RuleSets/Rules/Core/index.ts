import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { ArrayBracketNewLine } from "./ArrayBracketNewLine";
import { ArrayBracketSpacing } from "./ArrayBracketSpacing";
import { ArrayElementNewLine } from "./ArrayElementNewLine";
import { ArrowParens } from "./ArrowParens";
import { ArrowSpacing } from "./ArrowSpacing";
import { BlockSpacint as BlockSpacing } from "./BlockSpacing";
import { BraceStyle } from "./BraceStyle";
import { CommaDangle } from "./CommaDangle";
import { CommaStyle } from "./CommaStyle";
import { Complexity } from "./Complexity";
import { ComputedPropertySpacing } from "./ComputedPropertySpacing";
import { ConstructorSuper } from "./ConstructorSuper";
import { Curly } from "./Curly";
import { DotNotation } from "./DotNotation";
import { EOLLast } from "./EOLLast";
import { EQEQEQ } from "./EQEQEQ";
import { FunctionCallArgumentNewLine } from "./FunctionCallArgumentNewLine";
import { GeneratorStarSpacing } from "./GeneratorStarSpacing";
import { GuardForIn } from "./GuardForIn";
import { LinesBetweenClassMembers } from "./LinesBetweenClassMembers";
import { MaxClassesPerFile } from "./MaxClassesPerFile";
import { MaxLen } from "./MaxLen";
import { MultilineTernary } from "./MultilineTernary";
import { NewParens } from "./NewParens";
import { NoAsyncPromiseExecutor } from "./NoAsyncPromiseExecutor";
import { NoBitwise } from "./NoBitwise";
import { NoCaller } from "./NoCaller";
import { NoCaseDeclarations } from "./NoCaseDeclarations";
import { NoCondAssign } from "./NoCondAssign";
import { NoConsole } from "./NoConsole";
import { NoConstantCondition } from "./NoConstantCondition";
import { NoConstructorReturn } from "./NoConstructorReturn";
import { NoControlRegex } from "./NoControlRegex";
import { NoDebugger } from "./NoDebugger";
import { NoDuplicateCase } from "./NoDuplicateCase";
import { NoEmpty } from "./NoEmpty";
import { NoEmptyPattern } from "./NoEmptyPattern";
import { NoEval } from "./NoEval";
import { NoFallthrough } from "./NoFallthrough";
import { NoFloatingDecimal } from "./NoFloatingDecimal";
import { NoImplicitCoericon } from "./NoImplicitCoericon";
import { NoInnerDeclarations } from "./NoInnerDeclarations";
import { NoInvalidThis } from "./NoInvalidThis";
import { NoLonelyIf } from "./NoLonelyIf";
import { NoMultipleEmptyLines } from "./NoMultipleEmptyLines";
import { NoMultiSpaces } from "./NoMultiSpaces";
import { NoNewWrappers } from "./NoNewWrappers";
import { NoOctalEscape } from "./NoOctalEscape";
import { NoRegexSpaces } from "./NoRegexSpaces";
import { NoReturnAwait } from "./NoReturnAwait";
import { NoSequences } from "./NoSequences";
import { NoShadow } from "./NoShadow";
import { NoSparseArrays } from "./NoSparseArrays";
import { NoThrowLiteral } from "./NoThrowLiteral";
import { NoTrailingSpaces } from "./NoTrailingSpaces";
import { NoUndefInit } from "./NoUndefInit";
import { NoUnsafeFinally } from "./NoUnsafeFinally";
import { NoUnusedLabels } from "./NoUnusedLabels";
import { NoUselessCatch } from "./NoUselessCatch";
import { NoUselessRename } from "./NoUselessRename";
import { NoVar } from "./NoVar";
import { NoVoid } from "./NoVoid";
import { NoWhitespaceBeforeProperty } from "./NoWhitespaceBeforeProperty";
import { ObjectCurlyNewLine } from "./ObjectCurlyNewLine";
import { ObjectCurlySpacing } from "./ObjectCurlySpacing";
import { ObjectPropertyNewLine } from "./ObjectPropertyNewLine";
import { ObjectShorthand } from "./ObjectShorthand";
import { OneVar } from "./OneVar";
import { OperatorLineBreak } from "./OperatorLineBreak";
import { PaddedBlocks } from "./PaddedBlocks";
import { PaddingLineBetweenStatements } from "./PaddingLineBetweenStatements";
import { PreferConst } from "./PreferConst";
import { PreferObjectSpread } from "./PreferObjectSpred";
import { PreferRestParams } from "./PreferRestParams";
import { PreferSpread } from "./PreferSpread";
import { QuoteProps } from "./QuoteProps";
import { RestSpreadSpacing } from "./RestSpreadSpacing";
import { SemiSpacing } from "./SemiSpacing";
import { SemiStyle } from "./SemiStyle";
import { SpaceBeforeBlocks } from "./SpaceBeforeBlocks";
import { SpacedComment } from "./SpacedComment";
import { SpaceInfixOPs } from "./SpaceInfixOPs";
import { SpaceInParens } from "./SpaceInParens";
import { SpaceUnaryOPs } from "./SpaceUnaryOPs";
import { SwitchColonSpacing } from "./SwitchColonSpacing";
import { TemplateCurlySpacing } from "./TemplateCurlySpacing";
import { UseIsNaN } from "./UseIsNaN";
import { ValidTypeof } from "./ValidTypeof";
import { YieldStarSpacing } from "./YieldStarSpacing";
import { Yoda } from "./Yoda";

export let CoreTests = new ContainerSuite(
    "Core",
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
        ConstructorSuper,
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
        NoImplicitCoericon,
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
