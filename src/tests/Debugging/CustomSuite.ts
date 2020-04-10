import { CLIEngine } from "eslint";
import { ITestCase } from "./ITestCase";
import { LintSuite } from "./LintSuite";

/**
 * Represetns a test for linting.
 */
export class CustomSuite extends LintSuite
{
    /**
     * The name of the lint-test.
     */
    private suiteName: string;

    /**
     * Initializes a new instance of the `LintTest` class.
     *
     * @param suiteName
     * The name of the lint-test.
     *
     * @param testCases
     * The test-cases of the test-suite.
     *
     * @param config
     * The `eslint`-configuration to apply.
     */
    public constructor(suiteName: string, testCases: ITestCase[], config?: any)
    {
        super(testCases, config);
        this.suiteName = suiteName;
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return this.suiteName;
    }

    /**
     * @inheritdoc
     */
    protected VerifyResult(report: CLIEngine.LintReport): boolean
    {
        return (report.errorCount + report.warningCount) === 0;
    }
}
