import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.mjs";
import { CheckAlignment } from "./CheckAlignment.test.mjs";
import { CheckIndentation } from "./CheckIndentation.test.mjs";
import { CheckParamNames } from "./CheckParamNames.test.mjs";
import { CheckSyntax } from "./CheckSyntax.test.mjs";
import { CheckTagNames } from "./CheckTagNames.test.mjs";
import { CheckValues } from "./CheckValues.test.mjs";
import { EmptyTags } from "./EmptyTags.test.mjs";
import { NewLineAfterDescription } from "./NewLineAfterDescription.test.mjs";
import { NoTypes } from "./NoTypes.test.mjs";
import { RequireDescription } from "./RequireDescription.test.mjs";
import { RequireJSDoc } from "./RequireJSDoc.test.mjs";
import { RequireParam } from "./RequireParam.test.mjs";
import { RequireParamDescription } from "./RequireParamDescription.test.mjs";
import { RequireParamType } from "./RequireParamType.test.mjs";
import { RequireReturns } from "./RequireReturns.test.mjs";
import { RequireReturnsType } from "./RequireReturnsType.test.mjs";

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
