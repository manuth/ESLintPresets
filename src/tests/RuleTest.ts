import { CLIEngine } from "eslint";
import merge = require("lodash.merge");
import { LintTestBase } from "./LintTestBase";

/**
 * Represents a test for an `eslint`-rule.
 */
export class RuleTest extends LintTestBase
{
    /**
     * The name of the rule to test.
     */
    private ruleName: string;

    /**
     * Initializes a new instance of the `RuleTest` class.
     *
     * @param ruleName
     * The name of the rule to test.
     *
     * @param config
     * The `eslint`-configuration to apply.
     */
    public constructor(ruleName: string, config?: any)
    {
        super(config);
        this.ruleName = ruleName;
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return `Testing the \`${this.RuleName}\`-rule…`;
    }

    /**
     * @inheritdoc
     */
    public get Config(): any
    {
        return merge(
            {
                rules: {
                    [this.RuleName]: "warn"
                }
            },
            super.Config);
    }

    /**
     * Gets the name of the rule to test.
     */
    public get RuleName(): string
    {
        return this.ruleName;
    }

    /**
     * @inheritdoc
     */
    protected VerifyResult(report: CLIEngine.LintReport): boolean
    {
        return !report.results.some(
            (result) =>
            {
                return result.messages.some((message) => message.ruleId === this.RuleName);
            });
    }
}
