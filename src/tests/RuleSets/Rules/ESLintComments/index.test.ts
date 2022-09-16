import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";
import { DisableEnablePair } from "./DisableEnablePair.test.js";

/**
 * Provides tests for eslint-comment rules.
 */
export let ESLintCommentTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        DisableEnablePair
    ]);
