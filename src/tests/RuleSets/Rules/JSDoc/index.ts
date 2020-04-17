import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { CheckAlignment } from "./CheckAlignment";
import { CheckIndentation } from "./CheckIndentation";
import { CheckParamNames } from "./CheckParamNames";
import { CheckSyntax } from "./CheckSyntax";
import { CheckTagNames } from "./CheckTagNames";
import { CheckValues } from "./CheckValues";
import { EmptyTags } from "./EmptyTags";
import { NewLineAfterDescription } from "./NewLineAfterDescription";
import { NoTypes } from "./NoTypes";
import { RequireDescription } from "./RequireDescription";
import { RequireJSDoc } from "./RequireJSDoc";
import { RequireParam } from "./RequireParam";
import { RequireParamDescription } from "./RequireParamDescription";
import { RequireParamType } from "./RequireParamType";
import { RequireReturns } from "./RequireReturns";
import { RequireReturnsType } from "./RequireReturnsType";

export let JSDocTests = new ContainerSuite(
    "JSDoc",
    [
        CheckAlignment,
        CheckIndentation,
        CheckParamNames,
        CheckSyntax,
        CheckTagNames,
        CheckValues,
        EmptyTags,
        NewLineAfterDescription,
        NoTypes,
        RequireDescription,
        RequireJSDoc,
        RequireParamDescription,
        RequireParamType,
        RequireParam,
        RequireReturnsType,
        RequireReturns
    ]);
