import { ESLintRule } from "../../../../../ESLintRule";
import { ContainerSuite } from "../../../../Debugging/Suites/ContainerSuite";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite";
import { MatchDefaultExportName } from "./MatchDefaultExportName.test";
import { NoVoidExpression } from "./NoVoidExpression.test";
import { OrderedImports } from "./OrderedImports.test";
import { ReturnUndefined } from "./ReturnUndefined.test";

/**
 * Provides tests for tslint-rules.
 */
export let TSLintTests = new ContainerSuite(
    "TSLint",
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
