import { basename } from "node:path";
import { ContainerSuite } from "../../../Debugging/Suites/ContainerSuite.js";
import { DisableEnablePair } from "./DisableEnablePair.test.js";
import { NoAggregatingEnable } from "./NoAggregatingEnable.test.js";
import { NoDuplicateDisable } from "./NoDuplicateDisable.test.js";
import { NoUnlimitedDisable } from "./NoUnlimitedDisable.test.js";
import { NoUNusedDisable } from "./NoUnusedDisable.test.js";
import { NoUnusedEnable } from "./NoUnusedEnable.test.js";
import { RequireDescription } from "./RequireDescription.test.js";

/**
 * Provides tests for eslint-comment rules.
 */
export let ESLintCommentTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        DisableEnablePair,
        NoAggregatingEnable,
        NoDuplicateDisable,
        NoUnlimitedDisable,
        NoUNusedDisable,
        NoUnusedEnable,
        RequireDescription
    ]);
