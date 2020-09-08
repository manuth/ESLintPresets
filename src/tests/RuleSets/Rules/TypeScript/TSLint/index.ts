import { ContainerSuite } from "../../../../Debugging/Suites/ContainerSuite";
import { RuleSuite } from "../../../../Debugging/Suites/RuleSuite";
import { MatchDefaultExportName } from "./MatchDefaultExportName";
import { NoVoidExpression } from "./NoVoidExpression";
import { OrderedImports } from "./OrderedImports";
import { ReturnUndefined } from "./ReturnUndefined";

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
