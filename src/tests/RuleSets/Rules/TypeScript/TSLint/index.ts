import { ContainerSuite } from "../../../../Debugging/Suites/ContainerSuite";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite";
import { MatchDefaultExportName } from "./MatchDefaultExportName.test";
import { NoVoidExpression } from "./NoVoidExpression.test";
import { OrderedImports } from "./OrderedImports.test";
import { ReturnUndefined } from "./ReturnUndefined.test";

export let TSLintTests = new ContainerSuite(
    "TSLint",
    [
        new ContainerSuite(
            new RuleSuite("@typescript-eslint/tslint/config", []).SuiteName,
            [
                MatchDefaultExportName,
                NoVoidExpression,
                OrderedImports,
                ReturnUndefined
            ])
    ]);
