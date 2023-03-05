import { basename } from "node:path";
import { MatchDefaultExportName } from "./MatchDefaultExportName.test.js";
import { NoVoidExpression } from "./NoVoidExpression.test.js";
import { OrderedImports } from "./OrderedImports.test.js";
import { ReturnUndefined } from "./ReturnUndefined.test.js";
import { ESLintRule } from "../../../../../ESLintRule.cjs";
import { ContainerSuite } from "../../../../Debugging/Suites/ContainerSuite.js";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite.js";

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
