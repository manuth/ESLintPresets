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
import { Curly } from "./Curly";
import { DotNotation } from "./DotNotation";
import { EOLLast } from "./EOLLast";
import { EQEQEQ } from "./EQEQEQ";
import { FunctionCallArgumentNewLine } from "./FunctionCallArgumentNewLine";
import { GeneratorStarSpacing } from "./GeneratorStarSpacing";
import { GuardForIn } from "./GuardForIn";

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
        Curly,
        DotNotation,
        EOLLast,
        EQEQEQ,
        FunctionCallArgumentNewLine,
        GeneratorStarSpacing,
        GuardForIn
    ]);
