import { basename } from "path";
import { ESLintRule } from "../../../../../ESLintRule.js";
import { ContainerSuite } from "../../../../Debugging/Suites/ContainerSuite.mjs";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite.mjs";
import { MatchDefaultExportName } from "./MatchDefaultExportName.test.mjs";
import { NoVoidExpression } from "./NoVoidExpression.test.mjs";
import { OrderedImports } from "./OrderedImports.test.mjs";
import { ReturnUndefined } from "./ReturnUndefined.test.mjs";

/**
 * Provides tests for tslint-rules.
 */
export let TSLintTests = new ContainerSuite(
    basename(new URL(".", import.meta.url).pathname),
    [
        new ContainerSuite(
            new RuleSuite(ESLintRule.TSLint, []).SuiteName,
            [
                MatchDefaultExportName,
                NoVoidExpression,
                OrderedImports,
                ReturnUndefined
            ])
    ]);
