import { basename } from "node:path";
import { CheckAlignment } from "./CheckAlignment.test.js";
import { CheckIndentation } from "./CheckIndentation.test.js";
import { CheckParamNames } from "./CheckParamNames.test.js";
import { CheckSyntax } from "./CheckSyntax.test.js";
import { CheckTagNames } from "./CheckTagNames.test.js";
import { CheckValues } from "./CheckValues.test.js";
import { EmptyTags } from "./EmptyTags.test.js";
import { NewLineAfterDescription } from "./NewLineAfterDescription.test.js";
import { NoTypes } from "./NoTypes.test.js";
import { RequireDescription } from "./RequireDescription.test.js";
import { RequireJSDoc } from "./RequireJSDoc.test.js";
import { RequireParam } from "./RequireParam.test.js";
import { RequireParamDescription } from "./RequireParamDescription.test.js";
import { RequireParamType } from "./RequireParamType.test.js";
import { RequireReturns } from "./RequireReturns.test.js";
import { RequireReturnsType } from "./RequireReturnsType.test.js";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";

/**
 * Provides tests for jsdoc-rules.
 */
export let JSDocTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
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
