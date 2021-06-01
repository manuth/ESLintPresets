import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite";
import { CheckAlignment } from "./CheckAlignment.test";
import { CheckIndentation } from "./CheckIndentation.test";
import { CheckParamNames } from "./CheckParamNames.test";
import { CheckSyntax } from "./CheckSyntax.test";
import { CheckTagNames } from "./CheckTagNames.test";
import { CheckValues } from "./CheckValues.test";
import { EmptyTags } from "./EmptyTags.test";
import { NewLineAfterDescription } from "./NewLineAfterDescription.test";
import { NoTypes } from "./NoTypes.test";
import { RequireDescription } from "./RequireDescription.test";
import { RequireJSDoc } from "./RequireJSDoc.test";
import { RequireParam } from "./RequireParam.test";
import { RequireParamDescription } from "./RequireParamDescription.test";
import { RequireParamType } from "./RequireParamType.test";
import { RequireReturns } from "./RequireReturns.test";
import { RequireReturnsType } from "./RequireReturnsType.test";

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
