import { CLIEngine } from "eslint";
import { LintTestBase } from "./LintTestBase";

/**
 * Represetns a test for linting.
 */
export class LintTest extends LintTestBase
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
     * @param config
     * The `eslint`-configuration to apply.
     */
    public constructor(suiteName: string, config: any)
    {
        super(config);
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
